/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCashAccountInput = {
  id?: string | null,
  name: string,
  balance: number,
  type: CashAccountType,
  credit: number,
  closingDay: number,
  paymentDay: number,
  last4: string,
  active: boolean,
  currency: string,
};

export enum CashAccountType {
  CASH_ACCOUNT = "CASH_ACCOUNT",
  CREDIT_CARD = "CREDIT_CARD",
  GIFT_CARD = "GIFT_CARD",
}


export type ModelCashAccountConditionInput = {
  name?: ModelStringInput | null,
  balance?: ModelFloatInput | null,
  type?: ModelCashAccountTypeInput | null,
  credit?: ModelFloatInput | null,
  closingDay?: ModelIntInput | null,
  paymentDay?: ModelIntInput | null,
  last4?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  currency?: ModelStringInput | null,
  and?: Array< ModelCashAccountConditionInput | null > | null,
  or?: Array< ModelCashAccountConditionInput | null > | null,
  not?: ModelCashAccountConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelCashAccountTypeInput = {
  eq?: CashAccountType | null,
  ne?: CashAccountType | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCashAccountInput = {
  id: string,
  name?: string | null,
  balance?: number | null,
  type?: CashAccountType | null,
  credit?: number | null,
  closingDay?: number | null,
  paymentDay?: number | null,
  last4?: string | null,
  active?: boolean | null,
  currency?: string | null,
};

export type DeleteCashAccountInput = {
  id?: string | null,
};

export type CreateFlowOperationInput = {
  id?: string | null,
  amount: number,
  dateIssued: string,
  description: string,
  tags: Array< string >,
  bankNote?: string | null,
  issuerCashAccountID: string,
  owner?: string | null,
};

export type ModelFlowOperationConditionInput = {
  amount?: ModelFloatInput | null,
  dateIssued?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  bankNote?: ModelStringInput | null,
  issuerCashAccountID?: ModelIDInput | null,
  and?: Array< ModelFlowOperationConditionInput | null > | null,
  or?: Array< ModelFlowOperationConditionInput | null > | null,
  not?: ModelFlowOperationConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateFlowOperationInput = {
  id: string,
  amount?: number | null,
  dateIssued?: string | null,
  description?: string | null,
  tags?: Array< string > | null,
  bankNote?: string | null,
  issuerCashAccountID?: string | null,
  owner?: string | null,
};

export type DeleteFlowOperationInput = {
  id?: string | null,
};

export type CreateTransferOperationInput = {
  id?: string | null,
  amount: number,
  dateIssued: string,
  dateAcquired: string,
  description: string,
  tags: Array< string >,
  issuerBankNote?: string | null,
  acquirerBankNote?: string | null,
  issuerCashAccountID: string,
  acquirerCashAccountID: string,
  fee?: number | null,
  owner?: string | null,
};

export type ModelTransferOperationConditionInput = {
  amount?: ModelFloatInput | null,
  dateIssued?: ModelStringInput | null,
  dateAcquired?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  issuerBankNote?: ModelStringInput | null,
  acquirerBankNote?: ModelStringInput | null,
  issuerCashAccountID?: ModelIDInput | null,
  acquirerCashAccountID?: ModelIDInput | null,
  fee?: ModelFloatInput | null,
  and?: Array< ModelTransferOperationConditionInput | null > | null,
  or?: Array< ModelTransferOperationConditionInput | null > | null,
  not?: ModelTransferOperationConditionInput | null,
};

export type UpdateTransferOperationInput = {
  id: string,
  amount?: number | null,
  dateIssued?: string | null,
  dateAcquired?: string | null,
  description?: string | null,
  tags?: Array< string > | null,
  issuerBankNote?: string | null,
  acquirerBankNote?: string | null,
  issuerCashAccountID?: string | null,
  acquirerCashAccountID?: string | null,
  fee?: number | null,
  owner?: string | null,
};

export type DeleteTransferOperationInput = {
  id?: string | null,
};

export type CreateTradeOperationInput = {
  id?: string | null,
  note?: string | null,
  issuerCashAccountID: string,
  issuerNote?: string | null,
  acquirerCashAccountID: string,
  acquirerNote?: string | null,
  amount: number,
  amountCurrency: string,
  amountFee: number,
  price: number,
  priceCurrency: string,
  priceFee: number,
  exchangeRate: number,
  issuerExchangeRateInUsd: number,
  acquirerExchangeRateInUsd: number,
  date: string,
  owner?: string | null,
};

export type ModelTradeOperationConditionInput = {
  note?: ModelStringInput | null,
  issuerCashAccountID?: ModelIDInput | null,
  issuerNote?: ModelStringInput | null,
  acquirerCashAccountID?: ModelIDInput | null,
  acquirerNote?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  amountCurrency?: ModelStringInput | null,
  amountFee?: ModelFloatInput | null,
  price?: ModelFloatInput | null,
  priceCurrency?: ModelStringInput | null,
  priceFee?: ModelFloatInput | null,
  exchangeRate?: ModelFloatInput | null,
  issuerExchangeRateInUsd?: ModelFloatInput | null,
  acquirerExchangeRateInUsd?: ModelFloatInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelTradeOperationConditionInput | null > | null,
  or?: Array< ModelTradeOperationConditionInput | null > | null,
  not?: ModelTradeOperationConditionInput | null,
};

export type UpdateTradeOperationInput = {
  id: string,
  note?: string | null,
  issuerCashAccountID?: string | null,
  issuerNote?: string | null,
  acquirerCashAccountID?: string | null,
  acquirerNote?: string | null,
  amount?: number | null,
  amountCurrency?: string | null,
  amountFee?: number | null,
  price?: number | null,
  priceCurrency?: string | null,
  priceFee?: number | null,
  exchangeRate?: number | null,
  issuerExchangeRateInUsd?: number | null,
  acquirerExchangeRateInUsd?: number | null,
  date?: string | null,
  owner?: string | null,
};

export type DeleteTradeOperationInput = {
  id?: string | null,
};

export type CreateUserSecretInput = {
  id?: string | null,
  key: string,
  value?: string | null,
  owner?: string | null,
};

export type ModelUserSecretConditionInput = {
  key?: ModelStringInput | null,
  value?: ModelStringInput | null,
  and?: Array< ModelUserSecretConditionInput | null > | null,
  or?: Array< ModelUserSecretConditionInput | null > | null,
  not?: ModelUserSecretConditionInput | null,
};

export type UpdateUserSecretInput = {
  id: string,
  key?: string | null,
  value?: string | null,
  owner?: string | null,
};

export type DeleteUserSecretInput = {
  id?: string | null,
};

export type ModelCashAccountFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  balance?: ModelFloatInput | null,
  type?: ModelCashAccountTypeInput | null,
  credit?: ModelFloatInput | null,
  closingDay?: ModelIntInput | null,
  paymentDay?: ModelIntInput | null,
  last4?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  currency?: ModelStringInput | null,
  and?: Array< ModelCashAccountFilterInput | null > | null,
  or?: Array< ModelCashAccountFilterInput | null > | null,
  not?: ModelCashAccountFilterInput | null,
};

export type ModelFlowOperationFilterInput = {
  id?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  dateIssued?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  bankNote?: ModelStringInput | null,
  issuerCashAccountID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelFlowOperationFilterInput | null > | null,
  or?: Array< ModelFlowOperationFilterInput | null > | null,
  not?: ModelFlowOperationFilterInput | null,
};

export type ModelTransferOperationFilterInput = {
  id?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  dateIssued?: ModelStringInput | null,
  dateAcquired?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  issuerBankNote?: ModelStringInput | null,
  acquirerBankNote?: ModelStringInput | null,
  issuerCashAccountID?: ModelIDInput | null,
  acquirerCashAccountID?: ModelIDInput | null,
  fee?: ModelFloatInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTransferOperationFilterInput | null > | null,
  or?: Array< ModelTransferOperationFilterInput | null > | null,
  not?: ModelTransferOperationFilterInput | null,
};

export type ModelTradeOperationFilterInput = {
  id?: ModelIDInput | null,
  note?: ModelStringInput | null,
  issuerCashAccountID?: ModelIDInput | null,
  issuerNote?: ModelStringInput | null,
  acquirerCashAccountID?: ModelIDInput | null,
  acquirerNote?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  amountCurrency?: ModelStringInput | null,
  amountFee?: ModelFloatInput | null,
  price?: ModelFloatInput | null,
  priceCurrency?: ModelStringInput | null,
  priceFee?: ModelFloatInput | null,
  exchangeRate?: ModelFloatInput | null,
  issuerExchangeRateInUsd?: ModelFloatInput | null,
  acquirerExchangeRateInUsd?: ModelFloatInput | null,
  date?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelTradeOperationFilterInput | null > | null,
  or?: Array< ModelTradeOperationFilterInput | null > | null,
  not?: ModelTradeOperationFilterInput | null,
};

export type ModelUserSecretFilterInput = {
  id?: ModelIDInput | null,
  key?: ModelStringInput | null,
  value?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelUserSecretFilterInput | null > | null,
  or?: Array< ModelUserSecretFilterInput | null > | null,
  not?: ModelUserSecretFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateCashAccountMutationVariables = {
  input: CreateCashAccountInput,
  condition?: ModelCashAccountConditionInput | null,
};

export type CreateCashAccountMutation = {
  createCashAccount:  {
    __typename: "CashAccount",
    id: string,
    name: string,
    balance: number,
    type: CashAccountType,
    credit: number,
    closingDay: number,
    paymentDay: number,
    last4: string,
    active: boolean,
    currency: string,
    owner: string | null,
  } | null,
};

export type UpdateCashAccountMutationVariables = {
  input: UpdateCashAccountInput,
  condition?: ModelCashAccountConditionInput | null,
};

export type UpdateCashAccountMutation = {
  updateCashAccount:  {
    __typename: "CashAccount",
    id: string,
    name: string,
    balance: number,
    type: CashAccountType,
    credit: number,
    closingDay: number,
    paymentDay: number,
    last4: string,
    active: boolean,
    currency: string,
    owner: string | null,
  } | null,
};

export type DeleteCashAccountMutationVariables = {
  input: DeleteCashAccountInput,
  condition?: ModelCashAccountConditionInput | null,
};

export type DeleteCashAccountMutation = {
  deleteCashAccount:  {
    __typename: "CashAccount",
    id: string,
    name: string,
    balance: number,
    type: CashAccountType,
    credit: number,
    closingDay: number,
    paymentDay: number,
    last4: string,
    active: boolean,
    currency: string,
    owner: string | null,
  } | null,
};

export type CreateFlowOperationMutationVariables = {
  input: CreateFlowOperationInput,
  condition?: ModelFlowOperationConditionInput | null,
};

export type CreateFlowOperationMutation = {
  createFlowOperation:  {
    __typename: "FlowOperation",
    id: string,
    amount: number,
    dateIssued: string,
    description: string,
    tags: Array< string >,
    bankNote: string | null,
    issuerCashAccountID: string,
    issuerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdateFlowOperationMutationVariables = {
  input: UpdateFlowOperationInput,
  condition?: ModelFlowOperationConditionInput | null,
};

export type UpdateFlowOperationMutation = {
  updateFlowOperation:  {
    __typename: "FlowOperation",
    id: string,
    amount: number,
    dateIssued: string,
    description: string,
    tags: Array< string >,
    bankNote: string | null,
    issuerCashAccountID: string,
    issuerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type DeleteFlowOperationMutationVariables = {
  input: DeleteFlowOperationInput,
  condition?: ModelFlowOperationConditionInput | null,
};

export type DeleteFlowOperationMutation = {
  deleteFlowOperation:  {
    __typename: "FlowOperation",
    id: string,
    amount: number,
    dateIssued: string,
    description: string,
    tags: Array< string >,
    bankNote: string | null,
    issuerCashAccountID: string,
    issuerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type CreateTransferOperationMutationVariables = {
  input: CreateTransferOperationInput,
  condition?: ModelTransferOperationConditionInput | null,
};

export type CreateTransferOperationMutation = {
  createTransferOperation:  {
    __typename: "TransferOperation",
    id: string,
    amount: number,
    dateIssued: string,
    dateAcquired: string,
    description: string,
    tags: Array< string >,
    issuerBankNote: string | null,
    acquirerBankNote: string | null,
    issuerCashAccountID: string,
    issuerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    acquirerCashAccountID: string,
    acquirerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    fee: number | null,
    owner: string | null,
  } | null,
};

export type UpdateTransferOperationMutationVariables = {
  input: UpdateTransferOperationInput,
  condition?: ModelTransferOperationConditionInput | null,
};

export type UpdateTransferOperationMutation = {
  updateTransferOperation:  {
    __typename: "TransferOperation",
    id: string,
    amount: number,
    dateIssued: string,
    dateAcquired: string,
    description: string,
    tags: Array< string >,
    issuerBankNote: string | null,
    acquirerBankNote: string | null,
    issuerCashAccountID: string,
    issuerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    acquirerCashAccountID: string,
    acquirerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    fee: number | null,
    owner: string | null,
  } | null,
};

export type DeleteTransferOperationMutationVariables = {
  input: DeleteTransferOperationInput,
  condition?: ModelTransferOperationConditionInput | null,
};

export type DeleteTransferOperationMutation = {
  deleteTransferOperation:  {
    __typename: "TransferOperation",
    id: string,
    amount: number,
    dateIssued: string,
    dateAcquired: string,
    description: string,
    tags: Array< string >,
    issuerBankNote: string | null,
    acquirerBankNote: string | null,
    issuerCashAccountID: string,
    issuerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    acquirerCashAccountID: string,
    acquirerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    fee: number | null,
    owner: string | null,
  } | null,
};

export type CreateTradeOperationMutationVariables = {
  input: CreateTradeOperationInput,
  condition?: ModelTradeOperationConditionInput | null,
};

export type CreateTradeOperationMutation = {
  createTradeOperation:  {
    __typename: "TradeOperation",
    id: string,
    note: string | null,
    issuerCashAccountID: string,
    issuerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    issuerNote: string | null,
    acquirerCashAccountID: string,
    acquirerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    acquirerNote: string | null,
    amount: number,
    amountCurrency: string,
    amountFee: number,
    price: number,
    priceCurrency: string,
    priceFee: number,
    exchangeRate: number,
    issuerExchangeRateInUsd: number,
    acquirerExchangeRateInUsd: number,
    date: string,
    owner: string | null,
  } | null,
};

export type UpdateTradeOperationMutationVariables = {
  input: UpdateTradeOperationInput,
  condition?: ModelTradeOperationConditionInput | null,
};

export type UpdateTradeOperationMutation = {
  updateTradeOperation:  {
    __typename: "TradeOperation",
    id: string,
    note: string | null,
    issuerCashAccountID: string,
    issuerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    issuerNote: string | null,
    acquirerCashAccountID: string,
    acquirerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    acquirerNote: string | null,
    amount: number,
    amountCurrency: string,
    amountFee: number,
    price: number,
    priceCurrency: string,
    priceFee: number,
    exchangeRate: number,
    issuerExchangeRateInUsd: number,
    acquirerExchangeRateInUsd: number,
    date: string,
    owner: string | null,
  } | null,
};

export type DeleteTradeOperationMutationVariables = {
  input: DeleteTradeOperationInput,
  condition?: ModelTradeOperationConditionInput | null,
};

export type DeleteTradeOperationMutation = {
  deleteTradeOperation:  {
    __typename: "TradeOperation",
    id: string,
    note: string | null,
    issuerCashAccountID: string,
    issuerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    issuerNote: string | null,
    acquirerCashAccountID: string,
    acquirerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    acquirerNote: string | null,
    amount: number,
    amountCurrency: string,
    amountFee: number,
    price: number,
    priceCurrency: string,
    priceFee: number,
    exchangeRate: number,
    issuerExchangeRateInUsd: number,
    acquirerExchangeRateInUsd: number,
    date: string,
    owner: string | null,
  } | null,
};

export type CreateUserSecretMutationVariables = {
  input: CreateUserSecretInput,
  condition?: ModelUserSecretConditionInput | null,
};

export type CreateUserSecretMutation = {
  createUserSecret:  {
    __typename: "UserSecret",
    id: string,
    key: string,
    value: string | null,
    owner: string | null,
  } | null,
};

export type UpdateUserSecretMutationVariables = {
  input: UpdateUserSecretInput,
  condition?: ModelUserSecretConditionInput | null,
};

export type UpdateUserSecretMutation = {
  updateUserSecret:  {
    __typename: "UserSecret",
    id: string,
    key: string,
    value: string | null,
    owner: string | null,
  } | null,
};

export type DeleteUserSecretMutationVariables = {
  input: DeleteUserSecretInput,
  condition?: ModelUserSecretConditionInput | null,
};

export type DeleteUserSecretMutation = {
  deleteUserSecret:  {
    __typename: "UserSecret",
    id: string,
    key: string,
    value: string | null,
    owner: string | null,
  } | null,
};

export type GetCashAccountQueryVariables = {
  id: string,
};

export type GetCashAccountQuery = {
  getCashAccount:  {
    __typename: "CashAccount",
    id: string,
    name: string,
    balance: number,
    type: CashAccountType,
    credit: number,
    closingDay: number,
    paymentDay: number,
    last4: string,
    active: boolean,
    currency: string,
    owner: string | null,
  } | null,
};

export type ListCashAccountsQueryVariables = {
  filter?: ModelCashAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCashAccountsQuery = {
  listCashAccounts:  {
    __typename: "ModelCashAccountConnection",
    items:  Array< {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFlowOperationQueryVariables = {
  id: string,
};

export type GetFlowOperationQuery = {
  getFlowOperation:  {
    __typename: "FlowOperation",
    id: string,
    amount: number,
    dateIssued: string,
    description: string,
    tags: Array< string >,
    bankNote: string | null,
    issuerCashAccountID: string,
    issuerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type ListFlowOperationsQueryVariables = {
  filter?: ModelFlowOperationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFlowOperationsQuery = {
  listFlowOperations:  {
    __typename: "ModelFlowOperationConnection",
    items:  Array< {
      __typename: "FlowOperation",
      id: string,
      amount: number,
      dateIssued: string,
      description: string,
      tags: Array< string >,
      bankNote: string | null,
      issuerCashAccountID: string,
      issuerCashAccount:  {
        __typename: "CashAccount",
        id: string,
        name: string,
        balance: number,
        type: CashAccountType,
        credit: number,
        closingDay: number,
        paymentDay: number,
        last4: string,
        active: boolean,
        currency: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTransferOperationQueryVariables = {
  id: string,
};

export type GetTransferOperationQuery = {
  getTransferOperation:  {
    __typename: "TransferOperation",
    id: string,
    amount: number,
    dateIssued: string,
    dateAcquired: string,
    description: string,
    tags: Array< string >,
    issuerBankNote: string | null,
    acquirerBankNote: string | null,
    issuerCashAccountID: string,
    issuerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    acquirerCashAccountID: string,
    acquirerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    fee: number | null,
    owner: string | null,
  } | null,
};

export type ListTransferOperationsQueryVariables = {
  filter?: ModelTransferOperationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransferOperationsQuery = {
  listTransferOperations:  {
    __typename: "ModelTransferOperationConnection",
    items:  Array< {
      __typename: "TransferOperation",
      id: string,
      amount: number,
      dateIssued: string,
      dateAcquired: string,
      description: string,
      tags: Array< string >,
      issuerBankNote: string | null,
      acquirerBankNote: string | null,
      issuerCashAccountID: string,
      issuerCashAccount:  {
        __typename: "CashAccount",
        id: string,
        name: string,
        balance: number,
        type: CashAccountType,
        credit: number,
        closingDay: number,
        paymentDay: number,
        last4: string,
        active: boolean,
        currency: string,
        owner: string | null,
      } | null,
      acquirerCashAccountID: string,
      acquirerCashAccount:  {
        __typename: "CashAccount",
        id: string,
        name: string,
        balance: number,
        type: CashAccountType,
        credit: number,
        closingDay: number,
        paymentDay: number,
        last4: string,
        active: boolean,
        currency: string,
        owner: string | null,
      } | null,
      fee: number | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTradeOperationQueryVariables = {
  id: string,
};

export type GetTradeOperationQuery = {
  getTradeOperation:  {
    __typename: "TradeOperation",
    id: string,
    note: string | null,
    issuerCashAccountID: string,
    issuerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    issuerNote: string | null,
    acquirerCashAccountID: string,
    acquirerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    acquirerNote: string | null,
    amount: number,
    amountCurrency: string,
    amountFee: number,
    price: number,
    priceCurrency: string,
    priceFee: number,
    exchangeRate: number,
    issuerExchangeRateInUsd: number,
    acquirerExchangeRateInUsd: number,
    date: string,
    owner: string | null,
  } | null,
};

export type ListTradeOperationsQueryVariables = {
  filter?: ModelTradeOperationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTradeOperationsQuery = {
  listTradeOperations:  {
    __typename: "ModelTradeOperationConnection",
    items:  Array< {
      __typename: "TradeOperation",
      id: string,
      note: string | null,
      issuerCashAccountID: string,
      issuerCashAccount:  {
        __typename: "CashAccount",
        id: string,
        name: string,
        balance: number,
        type: CashAccountType,
        credit: number,
        closingDay: number,
        paymentDay: number,
        last4: string,
        active: boolean,
        currency: string,
        owner: string | null,
      } | null,
      issuerNote: string | null,
      acquirerCashAccountID: string,
      acquirerCashAccount:  {
        __typename: "CashAccount",
        id: string,
        name: string,
        balance: number,
        type: CashAccountType,
        credit: number,
        closingDay: number,
        paymentDay: number,
        last4: string,
        active: boolean,
        currency: string,
        owner: string | null,
      } | null,
      acquirerNote: string | null,
      amount: number,
      amountCurrency: string,
      amountFee: number,
      price: number,
      priceCurrency: string,
      priceFee: number,
      exchangeRate: number,
      issuerExchangeRateInUsd: number,
      acquirerExchangeRateInUsd: number,
      date: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUserSecretQueryVariables = {
  id: string,
};

export type GetUserSecretQuery = {
  getUserSecret:  {
    __typename: "UserSecret",
    id: string,
    key: string,
    value: string | null,
    owner: string | null,
  } | null,
};

export type ListUserSecretsQueryVariables = {
  filter?: ModelUserSecretFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserSecretsQuery = {
  listUserSecrets:  {
    __typename: "ModelUserSecretConnection",
    items:  Array< {
      __typename: "UserSecret",
      id: string,
      key: string,
      value: string | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListFlowOperationsByOwnerQueryVariables = {
  owner?: string | null,
  dateIssued?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFlowOperationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFlowOperationsByOwnerQuery = {
  listFlowOperationsByOwner:  {
    __typename: "ModelFlowOperationConnection",
    items:  Array< {
      __typename: "FlowOperation",
      id: string,
      amount: number,
      dateIssued: string,
      description: string,
      tags: Array< string >,
      bankNote: string | null,
      issuerCashAccountID: string,
      issuerCashAccount:  {
        __typename: "CashAccount",
        id: string,
        name: string,
        balance: number,
        type: CashAccountType,
        credit: number,
        closingDay: number,
        paymentDay: number,
        last4: string,
        active: boolean,
        currency: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListTransferOperationsByOwnerQueryVariables = {
  owner?: string | null,
  dateIssued?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTransferOperationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransferOperationsByOwnerQuery = {
  listTransferOperationsByOwner:  {
    __typename: "ModelTransferOperationConnection",
    items:  Array< {
      __typename: "TransferOperation",
      id: string,
      amount: number,
      dateIssued: string,
      dateAcquired: string,
      description: string,
      tags: Array< string >,
      issuerBankNote: string | null,
      acquirerBankNote: string | null,
      issuerCashAccountID: string,
      issuerCashAccount:  {
        __typename: "CashAccount",
        id: string,
        name: string,
        balance: number,
        type: CashAccountType,
        credit: number,
        closingDay: number,
        paymentDay: number,
        last4: string,
        active: boolean,
        currency: string,
        owner: string | null,
      } | null,
      acquirerCashAccountID: string,
      acquirerCashAccount:  {
        __typename: "CashAccount",
        id: string,
        name: string,
        balance: number,
        type: CashAccountType,
        credit: number,
        closingDay: number,
        paymentDay: number,
        last4: string,
        active: boolean,
        currency: string,
        owner: string | null,
      } | null,
      fee: number | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListTradeOperationsByOwnerQueryVariables = {
  owner?: string | null,
  date?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTradeOperationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTradeOperationsByOwnerQuery = {
  listTradeOperationsByOwner:  {
    __typename: "ModelTradeOperationConnection",
    items:  Array< {
      __typename: "TradeOperation",
      id: string,
      note: string | null,
      issuerCashAccountID: string,
      issuerCashAccount:  {
        __typename: "CashAccount",
        id: string,
        name: string,
        balance: number,
        type: CashAccountType,
        credit: number,
        closingDay: number,
        paymentDay: number,
        last4: string,
        active: boolean,
        currency: string,
        owner: string | null,
      } | null,
      issuerNote: string | null,
      acquirerCashAccountID: string,
      acquirerCashAccount:  {
        __typename: "CashAccount",
        id: string,
        name: string,
        balance: number,
        type: CashAccountType,
        credit: number,
        closingDay: number,
        paymentDay: number,
        last4: string,
        active: boolean,
        currency: string,
        owner: string | null,
      } | null,
      acquirerNote: string | null,
      amount: number,
      amountCurrency: string,
      amountFee: number,
      price: number,
      priceCurrency: string,
      priceFee: number,
      exchangeRate: number,
      issuerExchangeRateInUsd: number,
      acquirerExchangeRateInUsd: number,
      date: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListUserSecretsByOwnerQueryVariables = {
  owner?: string | null,
  key?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserSecretFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserSecretsByOwnerQuery = {
  listUserSecretsByOwner:  {
    __typename: "ModelUserSecretConnection",
    items:  Array< {
      __typename: "UserSecret",
      id: string,
      key: string,
      value: string | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateCashAccountSubscriptionVariables = {
  owner: string,
};

export type OnCreateCashAccountSubscription = {
  onCreateCashAccount:  {
    __typename: "CashAccount",
    id: string,
    name: string,
    balance: number,
    type: CashAccountType,
    credit: number,
    closingDay: number,
    paymentDay: number,
    last4: string,
    active: boolean,
    currency: string,
    owner: string | null,
  } | null,
};

export type OnUpdateCashAccountSubscriptionVariables = {
  owner: string,
};

export type OnUpdateCashAccountSubscription = {
  onUpdateCashAccount:  {
    __typename: "CashAccount",
    id: string,
    name: string,
    balance: number,
    type: CashAccountType,
    credit: number,
    closingDay: number,
    paymentDay: number,
    last4: string,
    active: boolean,
    currency: string,
    owner: string | null,
  } | null,
};

export type OnDeleteCashAccountSubscriptionVariables = {
  owner: string,
};

export type OnDeleteCashAccountSubscription = {
  onDeleteCashAccount:  {
    __typename: "CashAccount",
    id: string,
    name: string,
    balance: number,
    type: CashAccountType,
    credit: number,
    closingDay: number,
    paymentDay: number,
    last4: string,
    active: boolean,
    currency: string,
    owner: string | null,
  } | null,
};

export type OnCreateFlowOperationSubscriptionVariables = {
  owner: string,
};

export type OnCreateFlowOperationSubscription = {
  onCreateFlowOperation:  {
    __typename: "FlowOperation",
    id: string,
    amount: number,
    dateIssued: string,
    description: string,
    tags: Array< string >,
    bankNote: string | null,
    issuerCashAccountID: string,
    issuerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateFlowOperationSubscriptionVariables = {
  owner: string,
};

export type OnUpdateFlowOperationSubscription = {
  onUpdateFlowOperation:  {
    __typename: "FlowOperation",
    id: string,
    amount: number,
    dateIssued: string,
    description: string,
    tags: Array< string >,
    bankNote: string | null,
    issuerCashAccountID: string,
    issuerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeleteFlowOperationSubscriptionVariables = {
  owner: string,
};

export type OnDeleteFlowOperationSubscription = {
  onDeleteFlowOperation:  {
    __typename: "FlowOperation",
    id: string,
    amount: number,
    dateIssued: string,
    description: string,
    tags: Array< string >,
    bankNote: string | null,
    issuerCashAccountID: string,
    issuerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnCreateTransferOperationSubscriptionVariables = {
  owner: string,
};

export type OnCreateTransferOperationSubscription = {
  onCreateTransferOperation:  {
    __typename: "TransferOperation",
    id: string,
    amount: number,
    dateIssued: string,
    dateAcquired: string,
    description: string,
    tags: Array< string >,
    issuerBankNote: string | null,
    acquirerBankNote: string | null,
    issuerCashAccountID: string,
    issuerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    acquirerCashAccountID: string,
    acquirerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    fee: number | null,
    owner: string | null,
  } | null,
};

export type OnUpdateTransferOperationSubscriptionVariables = {
  owner: string,
};

export type OnUpdateTransferOperationSubscription = {
  onUpdateTransferOperation:  {
    __typename: "TransferOperation",
    id: string,
    amount: number,
    dateIssued: string,
    dateAcquired: string,
    description: string,
    tags: Array< string >,
    issuerBankNote: string | null,
    acquirerBankNote: string | null,
    issuerCashAccountID: string,
    issuerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    acquirerCashAccountID: string,
    acquirerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    fee: number | null,
    owner: string | null,
  } | null,
};

export type OnDeleteTransferOperationSubscriptionVariables = {
  owner: string,
};

export type OnDeleteTransferOperationSubscription = {
  onDeleteTransferOperation:  {
    __typename: "TransferOperation",
    id: string,
    amount: number,
    dateIssued: string,
    dateAcquired: string,
    description: string,
    tags: Array< string >,
    issuerBankNote: string | null,
    acquirerBankNote: string | null,
    issuerCashAccountID: string,
    issuerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    acquirerCashAccountID: string,
    acquirerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    fee: number | null,
    owner: string | null,
  } | null,
};

export type OnCreateTradeOperationSubscriptionVariables = {
  owner: string,
};

export type OnCreateTradeOperationSubscription = {
  onCreateTradeOperation:  {
    __typename: "TradeOperation",
    id: string,
    note: string | null,
    issuerCashAccountID: string,
    issuerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    issuerNote: string | null,
    acquirerCashAccountID: string,
    acquirerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    acquirerNote: string | null,
    amount: number,
    amountCurrency: string,
    amountFee: number,
    price: number,
    priceCurrency: string,
    priceFee: number,
    exchangeRate: number,
    issuerExchangeRateInUsd: number,
    acquirerExchangeRateInUsd: number,
    date: string,
    owner: string | null,
  } | null,
};

export type OnUpdateTradeOperationSubscriptionVariables = {
  owner: string,
};

export type OnUpdateTradeOperationSubscription = {
  onUpdateTradeOperation:  {
    __typename: "TradeOperation",
    id: string,
    note: string | null,
    issuerCashAccountID: string,
    issuerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    issuerNote: string | null,
    acquirerCashAccountID: string,
    acquirerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    acquirerNote: string | null,
    amount: number,
    amountCurrency: string,
    amountFee: number,
    price: number,
    priceCurrency: string,
    priceFee: number,
    exchangeRate: number,
    issuerExchangeRateInUsd: number,
    acquirerExchangeRateInUsd: number,
    date: string,
    owner: string | null,
  } | null,
};

export type OnDeleteTradeOperationSubscriptionVariables = {
  owner: string,
};

export type OnDeleteTradeOperationSubscription = {
  onDeleteTradeOperation:  {
    __typename: "TradeOperation",
    id: string,
    note: string | null,
    issuerCashAccountID: string,
    issuerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    issuerNote: string | null,
    acquirerCashAccountID: string,
    acquirerCashAccount:  {
      __typename: "CashAccount",
      id: string,
      name: string,
      balance: number,
      type: CashAccountType,
      credit: number,
      closingDay: number,
      paymentDay: number,
      last4: string,
      active: boolean,
      currency: string,
      owner: string | null,
    } | null,
    acquirerNote: string | null,
    amount: number,
    amountCurrency: string,
    amountFee: number,
    price: number,
    priceCurrency: string,
    priceFee: number,
    exchangeRate: number,
    issuerExchangeRateInUsd: number,
    acquirerExchangeRateInUsd: number,
    date: string,
    owner: string | null,
  } | null,
};

export type OnCreateUserSecretSubscriptionVariables = {
  owner: string,
};

export type OnCreateUserSecretSubscription = {
  onCreateUserSecret:  {
    __typename: "UserSecret",
    id: string,
    key: string,
    value: string | null,
    owner: string | null,
  } | null,
};

export type OnUpdateUserSecretSubscriptionVariables = {
  owner: string,
};

export type OnUpdateUserSecretSubscription = {
  onUpdateUserSecret:  {
    __typename: "UserSecret",
    id: string,
    key: string,
    value: string | null,
    owner: string | null,
  } | null,
};

export type OnDeleteUserSecretSubscriptionVariables = {
  owner: string,
};

export type OnDeleteUserSecretSubscription = {
  onDeleteUserSecret:  {
    __typename: "UserSecret",
    id: string,
    key: string,
    value: string | null,
    owner: string | null,
  } | null,
};
