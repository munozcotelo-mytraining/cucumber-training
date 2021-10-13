Feature: Suma
    Quiero comprobar que la calculadora hace bien las sumas

    Scenario: "Cuando el primer numero es negativo con TS"
        Given TsFlow Dados dos numeros -1 y 2
        When TsFlow Cuando los sumo
        Then TsFlow Obtengo una excepcion

    Scenario Outline: "Cuando tengo dos numeros naturales haciendo el test con TS - FLOW"
        Given TsFlow Dados dos numeros <numero_1> y <numero_2>
        When TsFlow Cuando los sumo
        Then TsFlow La suma es <resultado>

        Examples:
            | numero_1 | numero_2 | resultado |
            | 1 | 25 | 26 |
            | 2 | 26 | 28 |
            | 3 | 27 | 30 |
            | 4 | 28 | 32 |
            | 5 | 29 | 34 |

