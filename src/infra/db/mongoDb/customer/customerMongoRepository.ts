import { ObjectId } from 'mongodb'
import { AddCustomerRepository } from '../../../../data/protocols/db/customer/addCustomerRepository'
import { LoadCustomerByDocumentRepository } from '../../../../data/protocols/db/customer/loadCustomerByDocumentRepository'
import { CustomerModel } from '../../../../domain/models/customer'
import { AddCustomerParams, CustomerId } from '../../../../domain/useCases/customer/addCustomer/addCustomer'
import { mongoHelper } from '../helper/mongoHelper'

export class CustomerMongoRepository implements AddCustomerRepository, LoadCustomerByDocumentRepository {
  async add (customerData: AddCustomerParams): Promise<CustomerId> {
    const customerCollection = await mongoHelper.getCollection('customer')
    const result = await customerCollection.insertOne(customerData)
    const customerId = result.insertedId
    return mongoHelper.mapId(customerId)
  }

  async loadByDocument (document: string): Promise<CustomerModel> {
    const customerCollection = await mongoHelper.getCollection('customer')
    const customer = await customerCollection.findOne({ _id: new ObjectId(document)})
    return customer && mongoHelper.map(customer)
  }
}