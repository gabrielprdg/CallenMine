import { CustomerModel } from '../../models/customer'

export type LoadCostumerParams = {
  id: string
  name: string
}

export interface LoadCostumer {
  loadCostumerByDocument: (loadCostumerParams: LoadCostumerParams) => Promise<CustomerModel>
}