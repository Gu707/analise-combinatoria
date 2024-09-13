def calcular(numero_possiveis,tamanho_senha):
    calcular = numero_possiveis ** tamanho_senha
    return calcular

def main():
    print("calculadora de posibilidades")
    
    tamanho_senha = int(input("digite o tamanho da senha:"))
    numero_possiveis = int(input("digite o numero de caractes possíveis:"))
    resultado = calcular(numero_possiveis,tamanho_senha)
    print(f"o Numero de possibilidades é: {resultado}" )

if __name__ == "__main__":
    main()