Feature: Suma
    Quiero comprobar que la calculadora hace bien las sumas

    @prueba-tag1
    Scenario: "Cuando tengo dos numeros naturales"
        Given Dados dos numeros 1 y 2
        When Cuando los sumo
        Then La suma es 3

    Scenario: "Cuando el primer numero es negativo"
        Given Dados dos numeros -1 y 2
        When Cuando los sumo
        Then Obtengo una excepcion

    Scenario: "Cuando el segundo numero es negativo"
        Given Dados dos numeros 1 y -2
        When Cuando los sumo
        Then Obtengo una excepcion

    Scenario: "Cuando tengo dos numeros negativos"
        Given Dados dos numeros -1 y -2
        When Cuando los sumo
        Then Obtengo una excepcion

    Scenario: "Cuando tengo dos numeros naturales BIS"
        Given X - Dados dos numeros 10 y 20
        When Cuando los sumo
        Then X - La suma es 30

    @prueba-tag2
    Scenario Outline: "Cuando tengo dos numeros naturales BIS BIS"
        Given X - Dados dos numeros <numero_1> y <numero_2>
        When Cuando los sumo
        Then X - La suma es <resultado>

        Examples:
            | numero_1 | numero_2 | resultado |
            | 1 | 25 | 26 |
            | 2 | 26 | 28 |
            | 3 | 27 | 30 |
            | 4 | 28 | 32 |
            | 5 | 29 | 34 |
