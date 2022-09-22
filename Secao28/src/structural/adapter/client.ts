import { EmailValidatorAdapter } from "./validation/email-validator-adapter";
const email = "thalisson.bandeira@hotmail.com";
const emailValidator = new EmailValidatorAdapter();

if (emailValidator.isEmail(email)) {
  console.log("É válido");
} else {
  console.log("É invalido");
}
