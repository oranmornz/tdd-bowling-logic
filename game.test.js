// NB - As I've completed the bowling-kata, I'll make an acknowledgement that in doing this I'm not 100% working from a TDD perspective. I can't unlearn various gameplay implementation factors that inform the code. I was inclined towards writing the TDD code from the perspective of a 'as game progresses' perspective, however as we've been informed to go with the same 'post-game' perspective, I've elected to bypass that inclination. I may still do it at some point before submitting as a 'why not?' We'll see.

// - - Import Vitest Functions - - //

import { describe, it, expect } from 'vitest'

// - - Import Game Functions - - //

import { scoreCard } from './game.js'
import { isDouble } from './game.js'
import { isStrike } from './game.js'
import { isSpare } from './game.js'
import { isNormal } from './game.js'

// - - Game Function Tests - - //

describe(scoreCard, () => {
    it('should do this thing', () => {
        //Arrange


        //Act


        //Assert
        expect().toBe()
    })
    it('should do this other thing', () => {
        //Arrange


        //Act


        //Assert
        expect().toBe()
    })
})

describe(isDouble, () => {
    it('should do this thing', () => {
        //Arrange


        //Act


        //Assert
        expect().toBe()
    })
    it('should do this other thing', () => {
        //Arrange


        //Act


        //Assert
        expect().toBe()
    })
})

describe(isStrike, () => {
    it('should do this thing', () => {
        //Arrange


        //Act


        //Assert
        expect().toBe()
    })
    it('should do this other thing', () => {
        //Arrange


        //Act


        //Assert
        expect().toBe()
    })
})

describe(isSpare, () => {
    it('should do this thing', () => {
        //Arrange


        //Act


        //Assert
        expect().toBe()
    })
    it('should do this other thing', () => {
        //Arrange


        //Act


        //Assert
        expect().toBe()
    })
})

describe(isNormal, () => {
    it('should do this thing', () => {
        //Arrange


        //Act


        //Assert
        expect().toBe()
    })
    it('should do this other thing', () => {
        //Arrange


        //Act


        //Assert
        expect().toBe()
    })
})