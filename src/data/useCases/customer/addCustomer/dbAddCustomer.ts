import { AddCustomer, AddCustomerParams, CustomerId } from '../../../../domain/useCases/customer/addCustomer/addCustomer'
import { AddCustomerRepository } from '../../../protocols/db/customer/addCustomerRepository'

export class DbAddCustomer implements AddCustomer {
  private readonly addcustomerRepository: AddCustomerRepository
  constructor (addCustomerRepository: AddCustomerRepository) {
    this.addcustomerRepository = addCustomerRepository
  }

  async add (data: AddCustomerParams): Promise<CustomerId> {
    const customerId = await this.addcustomerRepository.add(data)
    return customerId
  }
}
