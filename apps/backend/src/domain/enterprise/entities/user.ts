import { UniqueEntityID } from '../../../core/entities/unique-entity-id'
import { UserProps } from './user-props'

export class User {
  private _id: UniqueEntityID
  private props: UserProps

  constructor(props: Omit<UserProps, 'createdAt'> & { createdAt?: Date }, id?: UniqueEntityID) {
    this._id = id ?? new UniqueEntityID()
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    }
  }

  get id() {
    return this._id.toString()
  }

  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }

  get password() {
    return this.props.password
  }

  get isActive() {
    return this.props.isActive
  }

  get createdAt() {
    return this.props.createdAt
  }

  activate() {
    this.props.isActive = true
  }

  deactivate() {
    this.props.isActive = false
  }

  changeName(name: string) {
    if (name.length < 3) {
      throw new Error('Nome inválido')
    }
    this.props.name = name
  }
}
