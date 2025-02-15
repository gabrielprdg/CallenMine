import { AddSchedulingBlock } from '../../../../domain/useCases/schedulingBlock/addSchedulingBlock/addSchedulingBlock'
import { badRequest, ok } from '../../../helpers/httpHelper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'
import { Validation } from '../../../protocols/validation'

export class AddSchedulingBlockController implements Controller {
  private readonly validation: Validation
  private readonly addSchedulingBlock: AddSchedulingBlock

  constructor (valition: Validation, addSchedulingBlock: AddSchedulingBlock) {
    this.validation = valition,
    this.addSchedulingBlock = addSchedulingBlock
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error != null) {
        return badRequest(error)
      }
  
      const { start, end, note } = httpRequest.body
      const schedulingBlockId = await this.addSchedulingBlock.add({start : new Date(start), end: new Date(end), note })
      
      return ok(schedulingBlockId)
    } catch (err) {
      throw Error(err)
    }
  }
}