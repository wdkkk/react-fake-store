export type Product = {
  id: number,
  title: string,
  price: number,
  description: string
  category: string
  image: string
  rating: {
    rate: number,
    count: number
  }
}

export type User = {
  address: {
    geolocation: {
      lat: string,
      long: string
    },
    city: string,
    street: string,
    number: number,
    zipcode: string
  },
  id: number,
  email: string,
  name: {
    firstname: string,
    lastname: string
  },
  phone: string,
  __v: number
}

export type PreconditionState = {
  checked: boolean,
  isPreconditionPage: boolean
}

export type AuthenficationState = {
  authenficated: boolean,
  token: string
}

export type State = {
  authenficationSliceReducer: AuthenficationState,
  preconditionSliceReducer: PreconditionState
};