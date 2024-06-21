import { formatNumber } from "../components/layout/Discounts";

describe('formatear numero a string con separador de miles', () => {
    test('numero 1000 debe regresar 1.000 con separador en string', () => {
        expect(formatNumber(1000)).toBe("1.000");
    })
    
    describe('formatear un string que ya tiene punto 1.000', () => {
        test("ingresando 1.000", () => {
            expect(formatNumber(1.000)).toBe("1")
        })
    })

    describe('verificar el  tipo de  dato recibibo', ()  => {
        test('Se ingresa cualquier valor numerico y se espera un string' , () => {
            expect(formatNumber(typeof "452648")).toBe("string")
        })
    })

});
