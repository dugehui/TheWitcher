import Disciple from "../disciple"
import { AssertionError } from "assert"

describe('Disciple', () => {
    const disciple = new Disciple('test')

    describe('eatMushrooms', () => {

        it('mushroomsAte smaller than 3, stillAlive', () => {
            disciple.mushroomsAte = 1
            disciple.eatMushrooms()
            expect(disciple.mushroomsAte).toBe(2)
            expect(disciple.isStillAlive).toBeTruthy()
        })

        it('mushroomsAte bigger than 3, notAlive', () => {
            disciple.mushroomsAte = 5
            disciple.eatMushrooms()
            expect(disciple.mushroomsAte).toBe(6)
            expect(disciple.isStillAlive).toBeFalsy()
            expect(disciple.eatMushrooms()).toBe(`test screams and dies in agony.`)
        })

        it('mushroomsAte is 3, notAlive', () => {
            disciple.mushroomsAte = 3
            // disciple.name = 'aname'
            disciple.eatMushrooms()
            expect(disciple.mushroomsAte).toBe(4)
            expect(disciple.isStillAlive).toBeFalsy()
            expect(disciple.eatMushrooms()).toBe(`test screams and dies in agony.`)
        })
    })
    describe('isTrained', () => {
        it('false, mushroomsAte!==0, trainingSessions=0', () => {
            disciple.mushroomsAte = 3
            disciple.trainingSessions = 0
            expect(disciple.isTrained()).toBeFalsy()
        })
        it('false, mushroomsAte == 0, trainingSessions = 2', () => {
            disciple.mushroomsAte = 0
            disciple.trainingSessions = 2
            expect(disciple.isTrained()).toBeFalsy()
        })
        it('false, mushroomsAte == 0, trainingSessions = 0', () => {
            disciple.mushroomsAte = 0
            disciple.trainingSessions = 0
            expect(disciple.isTrained()).toBeFalsy()
        })
        it('true, mushroomsAte !== 0, trainingSessions = 2', () => {
            disciple.mushroomsAte = 3
            disciple.trainingSessions = 2
            expect(disciple.isTrained()).toBeTruthy()
        })
    })
    describe('train', () => {
        it('trainingSessions', () => {
            disciple.trainingSessions = 3
            disciple.train()
            expect(disciple.trainingSessions).toBe(4)
        })
    })
})