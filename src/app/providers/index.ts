import compose from "compose-function"

import { withRouter } from "./withRouter"
import { withStore } from "./withStore"
import { withI18n } from "./withI18n"

export const withProviders = compose(withRouter, withStore, withI18n)
