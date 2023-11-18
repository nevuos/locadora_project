export const validationRules = {
    email: {
      required: "E-mail é obrigatório",
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: "E-mail inválido",
      },
    },
    password: {
      required: "Senha é obrigatória",
      minLength: {
        value: 8,
        message: "A senha deve ter pelo menos 8 caracteres",
      },
      noSimpleSequences: (value: string) => {
        if (/(\d)\1\1/.test(value)) {
          return "A senha não deve conter três números iguais em sequência";
        }
        if (/12345678|23456789/.test(value)) {
          return "A senha não deve ser uma sequência numérica simples";
        }
        return true;
      },
      hasSpecialCharacter: (value: string) => {
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
          return "A senha deve conter pelo menos um caractere especial";
        }
        return true;
      },
    },
    nome: {
      required: "Nome é obrigatório",
    },
  };
  