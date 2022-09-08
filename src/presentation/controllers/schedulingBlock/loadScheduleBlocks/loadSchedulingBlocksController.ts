import { AddSchedulingBlock } from '../../../../domain/useCases/schedulingBlock/addSchedulingBlock/addSchedulingBlock'
import { LoadSchedulingBlocks } from '../../../../domain/useCases/schedulingBlock/loadSchedulingBlocks/loadSchedulingBlocks'
import { ServerError } from '../../../errors/serverError'
import { badRequest, ok, serverError } from '../../../helpers/httpHelper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'
import { Validation } from '../../../protocols/validation'

export class LoadSchedulingBlocksController implements Controller {
  private readonly loadSchedulingBlocks: LoadSchedulingBlocks

  constructor (loadSchedulingBlocks: LoadSchedulingBlocks) {
    this.loadSchedulingBlocks = loadSchedulingBlocks
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const schedulingBlocks = await this.loadSchedulingBlocks.load()

      return ok(schedulingBlocks)
    } catch (err) {
      return serverError(err)
    }
  }
}