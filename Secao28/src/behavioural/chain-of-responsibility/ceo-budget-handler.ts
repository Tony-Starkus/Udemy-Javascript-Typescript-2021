import { BaseBudgetHandler } from "./base-budget-handler";
import { CustomerBudget } from "./customer-budget";

export class CEOBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    console.log("O ceo tratou o orçamento");
    budget.approved = true;
    return super.handle(budget);
  }
}