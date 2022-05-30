// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IpcRenderer } from 'electron'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      ipcRenderer: IpcRenderer
    }
  }
}

export type Button = {
  id: number,
  value: number
}

export type Document = {
  id: number,
  name: string,
}

export type User = {
  id: number,
  typeDocument: number,
  document: number,
  name: string,
  lastname: string,
  turn?: Turn
}

export type Turn = {
  id: number,
  time: string,
  professional: string,
  consulting : string,
  payment: boolean
}
