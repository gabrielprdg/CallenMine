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
      const schedulingId = await this.addSchedulingBlock.add({ start, end, note })

      return ok(schedulingId)
    } catch (err) {
      throw Error(err)
    }
  }
}