import { Collection, MongoClient, ObjectId } from 'mongodb'

export const mongoHelper = {
  client: null as unknown as MongoClient,
  uri: null as unknown as string,
  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri)
  },

  async disconnect () {
    await this.client.close()
    this.client = null
  },

  async getCollection (name: string): Promise<Collection> {
    // isConnected -> metodo que verifica se o client esta conectado ou nao
   
    return this.client.db().collection(name)
  },

  mapId: (ObId: ObjectId): any => {
    const convertId = {id: ObId}
    return convertId
  },

  map: (data: any): any => {
    const { _id, ...collectionWithoutId } = data
    return Object.assign({}, collectionWithoutId, { id: _id })
  },

  mapCollection: (collection: any[]): any[] => {
    return collection.map(i => mongoHelper.map(i))
  }
}
