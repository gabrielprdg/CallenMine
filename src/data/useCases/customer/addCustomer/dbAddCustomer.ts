import { AddCustomer, AddCustomerParams, CustomerId } from '../../../../domain/useCases/customer/addCustomer/addCustomer'
import { AddCustomerRepository } from '../../../protocols/db/customer/addCustomerRepository'

export class DbAddCustomer implements AddCustomer {
  private readonly addCustomerRepository: AddCustomerRepository
  constructor (addCustomerRepository: AddCustomerRepository) {
    this.addCustomerRepository = addCustomerRepository
  }

  async add (data: AddCustomerParams): Promise<CustomerId> {
    const customerId = await this.addCustomerRepository.add(data)
    return customerId
  }
}
