# JavaScript Bowling Kata

This kata aims to help you become familiar with test-first design, also commonly called test-driven development, or TDD. TDD often results in stronger software design and **significantly** reduced complexity, as well as increased test coverage! For these reasons, many teams prefer writing tests first.

## Setup

<details style="padding-left: 2em">
  <summary>More about installation</summary>
  
  1. Clone this repository
  1. `npm install`
</details>

### 0. Preparing a test runner

- [ ] `npm install -D vitest`
- [ ] Change the `test` script in `package.json` to `"vitest"`

<details style="padding-left: 2em">
  <summary>More about the test script</summary>

  You'll see a line in `package.json` that says
  ```
  "test": "echo \"Error: no test specified\" && exit 1"
  ```
  This is what will happen when you run `npm test` or `npm t`. Instead of echoing an error, replace it with `"vitest"` so it reads
  ```
  "test": "vitest"
  ```

</details>

-----
## Tests (which drive development)

### 1. Create a sample test

- [ ] Create a test that will always pass
  <details style="padding-left: 2em">
    <summary>More about the sample test</summary>

    This help us check that our setup is working. Create `score.test.js` with these contents.

    ```js
      import { test, expect } from 'vitest'

      test('test setup working', () => {
        expect(true).toBeTruthy()
      })
    ```
  </details>

- [ ] Run the tests
  <details style="padding-left: 2em">
    <summary>More about running tests</summary>

    Run tests on the command line with `npm test` and celebrate if we're getting a passing test. Next, we will commit the working test.
  </details>

- [ ] Commit our work
  <details style="padding-left: 2em">
    <summary>More about committing</summary>
    
    ```shell
    git add -A
    git commit -m "Test setup working"
    ```
  </details>

### 2. Preparing to test frames

- [ ] import a new file, `./score`, from `score.test.js`
  <details style="padding-left: 2em">
    <summary>More about importing</summary>

    At the top of `score.test.js`, add a reference to the code we intend to test.

    ```js
    import * as score from './score' // this is the line to add
    ```
    Now you'll notice we are getting an error because it can't find the `score` reference (because it doesn't exist yet).
  </details>

- [ ] Create `score.js` which exports an empty object
  <details style="padding-left: 2em">
    <summary>More about <code>score.js</code></summary>

    Create a new `score.js` file in the top level of your project. For now, it will contain the minimum amount of code required to get the test to pass.
    
    ```js
    export {}
    ```

    After saving these changes, the single test should once again run and pass.
  </details>

---
## Scoring frames

### 3. Gutterball frames

Now, we will test our least complicated frame.

- [ ] Create a test for returning the score of a gutterball frame. It will fail
  <details style="padding-left: 2em">
    <summary>More about the gutterball test</summary>

    ```js
    test('scores a gutterball frame', () => {
      const frame = [0, 0]
      const expected = 0
      const actual = score.scoreFrame(frame)

      expect(actual).toBe(expected)
    })
    ```

    Now our test is failing because it can't find the `scoreFrame` method. So let's add it.
  </details>

- [ ] Add the `scoreFrame` method to `./score.js` and export it
  <details style="padding-left: 2em">
    <summary>More about the <code>scoreFrame</code> method</summary>

    To `./score.js`, modify the exports and add the `scoreFrame` method
    ```js
    export {
      scoreFrame
    }

    function scoreFrame (frame) {
    }
    ```

    Now our test is failing because it returned the wrong value (`undefined`) instead of what it was expecting (`0`). So let's return what it wants.
  </details>

- [ ] Cause `scoreFrame` to return the value expected by our test
  <details style="padding-left: 2em">
    <summary>More about the <code>scoreFrame</code> return value</summary>

    The quickest way to get our tests passing again is for `scoreFrame` to return `0`.
    ```js
    function scoreFrame (frame) {
      return 0
    }
    ```

    Sweet! Our tests are passing again. Let's commit it.
  </details>

- [ ] Commit our work
  <details style="padding-left: 2em">
    <summary>More about committing</summary>

    ```shell
    git add -A
    git commit -m "Scoring gutterball frames"
    ```
  </details>

### 4. Normal frames

Now let's add a feature that can score a normal frame (one without a spare or a strike).

- [ ] Write a test to score a normal frame
  <details style="padding-left: 2em">
    <summary>More about the normal frame test</summary>

    Our test might look like this:
    ```js
    test('scores a normal frame', () => {
      const frame = [2, 3]
      const expected = 5
      const actual = score.scoreFrame(frame)
      expect(actual).toBe(expected)
    })
    ```

    This new test is failing because we were expecting a `5` and `0` was returned. Apparently our `scoreFrame` method needs to do something more than `return 0`.
  </details>

- [ ] Update the `scoreFrame` function to pass the test
  <details style="padding-left: 2em">
    <summary>More about updating <code>scoreFrame</code></summary>

    Instead of returning zero, the `scoreFrame` function should accept a frame and use its two values to return the score. Complete the `scoreFrame` function to pass the test.
    ```js
    function scoreFrame (frame) {
      //?
    }
    ```
    But remember, the cycle is RED -> GREEN -> REFACTOR. Is there anything about our code that we could improve to make it more readable or DRY?
  </details>

- [ ] Commit our work
  <details style="padding-left: 2em">
    <summary>More about committing</summary>

    ```shell
    git add -A
    git commit -m "Scoring normal frames"
    ```
  </details>

### 5. Spare frames

**From this point forward you will be writing the tests yourself!**

- [ ] Add a test for scoring a spare, and update `scoreFrame` to pass
  <details style="padding-left: 2em">
    <summary>More about scoring spares</summary>
    
    To do this, we're going to need the next frame as well. **You'll need to pass two arguments** when calling the `scoreFrame` function.

    ```js
    test('scores a spare frame', () => {
    })
    ```
  </details>

- [ ] Complete any refactoring, re-run the tests, and make a commit

### 6. Single strike frames

- [ ] Add a test for scoring a single strike, and update `scoreFrame` to pass
  <details style="padding-left: 2em">
    <summary>More about scoring single strikes</summary>
    Because a strike uses the next 2 rolls, if the first is another strike (called a double), we'll need yet another frame. Let's tackle the double scenario later. For now, let's handle the single-strike scenario.

    ```js
    test('scores a single strike frame', () => {
    })
    ```
  </details>

- [ ] Complete any refactoring, re-run the tests, and make a commit (again)

### 7. Double strike frames

- [ ] Add a test for scoring a **double** strike, and update `scoreFrame` to pass
  <details style="padding-left: 2em">
    <summary>More about scoring double strikes</summary>
    
    Now let's implement that other strike scenario where we have 2 strikes in a row and need a third frame. First, a new test.

    ```js
    test('scores a double strike frame', () => {
    })
    ```
  </details>

- [ ] Complete any refactoring, re-run the tests, and make a commit (yet again)
  <details style="padding-left: 2em">
    <summary>Tips</summary>

    Once again, look for opportunities to refactor. Do you have a `scoreStrikes` function? Maybe `isStrike` and `isSpare` functions would be useful too. Run the tests and make sure they still pass. Cool, then commit our changes.
  </details>

---
## Scoring games

### 8. Score an entire game

- [ ] Add a feature to score a whole game of ten frames
  <details style="padding-left: 2em">
    <summary>More about scoring an entire game</summary>
    Now that we can score many types of frames, let's add a feature to score a whole game of 10 frames. Because the 10th frame has special behaviour if there is a strike or a spare in it, we'll leave that scenario out of this test and test it separately later. But we can still add normal, spare, single strike and double strike frames.

    ```js
    test('scores a game', () => {
    })
    ```
  </details>

- [ ] Complete any refactoring, re-run the tests, and make a commit

### 9. Score a game with a strike or spare in the 10th frame

- [ ] Add a feature to score a game with a strike or spare in the last frame
  <details style="padding-left: 2em">
    <summary>More about scoring special 10th frames</summary>
    Now let's add a feature that calculates the 10th frame when it contains a strike or a spare. You guessed it, a test first.

    ```js
    test('scores a spare in the 10th frame', () => {
    })
    ```

    Maybe we could create an `isTenth` variable and pass it when calling `scoreFrame`?
  </details>

### 10. Score a perfect game

- [ ] Add a test that scores a perfect game

<details style="padding-left: 2em">
  <summary>More about a perfect game</summary>

  A perfect game should result in a score of 300.
  ```
  const frames = [
    [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
  ]
  ```

  You may find that scoring a perfect game reveals some flaws in your logic (maybe when scoring the 9th frame?). Make adjustments until the tests pass!
</details>

-----
## Stretch

### Create a client to consume the game module

Name it `index.js` so we can run it with `npm start`.

Perhaps have a look at the [prompt](https://www.npmjs.com/package/prompt) package.

---
[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=tdd-bowling-kata)
