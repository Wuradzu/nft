export interface ICollections{
    _id: string,
  address: string,
  creator: {
    _id: string,
    address: string,
    name: string,
    slug: {
      current: string
    }
  },
  description: string,
  mainImage: {
    asset: {
      _ref: string,
      _type: string
    }
  },
  nftCollectionName: string,
  previewImage: {
    asset: {
      _ref: string,
      _type: string
    }
  },
  slug: {
    current: string
  },
  title: string
}