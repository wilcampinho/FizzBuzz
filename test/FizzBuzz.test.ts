import FizzBuzz from "../src/FizzBuzz";


describe("Feature: Exibir valores numericos de um array, caso seja divisivel por 3 e por 5, exibir 'FizzBuzz' ao inves do numero. Caso seja divisivel somente por 3, 'Fizz'. Caso seja divisivel somente por 5, 'Buzz'", () =>
{
  it("Primeiro Comportamento: Quando for divisivel por 3 e por 5, retornar 'FizzBuzz'", () =>
  {
    // Given
    let sut = new FizzBuzz(100)

    // When
    let returnedValue = sut.getValueByPosition(15)

    // Then
    expect(returnedValue).toBe("FizzBuzz");
  });

  it("Segundo Comportamento: Quando for divisivel somente por 3 , retornar 'Fizz'", () =>
  {
    // Given
    let sut = new FizzBuzz(100)

    // When
    let returnedValue = sut.getValueByPosition(9)

    // Then
    expect(returnedValue).toBe("Fizz");
  });

  it("Terceiro Comportamento: Quando for divisivel somente por 5, retornar 'Buzz'", () =>
  {
    // Given
    let sut = new FizzBuzz(100)

    // When
    let returnedValue = sut.getValueByPosition(10)

    // Then
    expect(returnedValue).toBe("Buzz");
  });

  it("Quarto Comportamento: Quando não for divisivel nem por 3 nem por 5, retornar o numero", () =>
  {
    // Given
    let sut = new FizzBuzz(100)

    // When
    let returnedValue = sut.getValueByPosition(7)

    // Then
    expect(returnedValue).toBe("7");
  });
});