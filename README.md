# What is this project about

This is sample project I use to teach people of team work with git tool. It conatins simple mathematical problem that can be fast implemented. 
The goal is to simulate parallel team work, playing with forks, PR, merges etc.

# MathAPI endpoints to implement

1. Head to [node js web page](https://nodejs.org/en/) and install NodeJS 12.*.
2. Verify your installation by running command `node -v` in your terminal of choice. If NodeJS installed correctly you should get relevant information.
3. Ensure you have npm package manager installed with [instruction](https://www.npmjs.com/get-npm)
3. Install project dependencies with `npm i` command
4. Install nodemon with command `npm i -g nodemon`
4. To start server run `npm start`. It will run on default port `3000`. You should get<br>
`Listening on port 3000...`
5. Experiment, extend, endorse.

# What is this task about 

There need to be following apis method implemented:
1. HTTP GET /api/fib/:n - calculate [Fibbonacci series](https://en.wikipedia.org/wiki/Fibonacci_sequence) n-element
2. HTTP GET /api/first-lowest-prime/:n - calculate closest [prime nunber](https://en.wikipedia.org/wiki/Prime_number)-p such p<=n
3. HTTP GET /api/gdc/:a/:b - [calculate grates common divisior](https://en.wikipedia.org/wiki/Greatest_common_divisor) 
4. HTTP GET /api/lcm/:a/:b - [least common multiple](https://en.wikipedia.org/wiki/Least_common_multiple)
5. HTTP GET /api/convex-polygon-diagonals/:n - calculate number of [diagonals of flat convex polygon](https://tutors.com/math-tutors/geometry-help/diagonal-formula)
6. HTTP GET /api/binominal/:n/:k - k-element combination out of n-eleemnt set without repetition, called also [binominal coefficient](https://en.wikipedia.org/wiki/Binomial_coefficient)
7. HTTP GET /api/factorial/:n - calculate [the factorial](https://en.wikipedia.org/wiki/Factorial) of n number 
8. HTTP GET /api/circle-params/:r - for given real number calculate circle field and circuit
9. HTTP GET /api/random-between/:a/:b - for given range [a,b] return random number with equal distribution i.e. (b-a)*P([a,b]) = 1

# Response shape

The response should be JSON object consisting of provided parameters and result of calculation.

# Responses and data validation

All input data should be validated and for invalid parameters 400 Bad Request shoult be returned to client.

# Contributing guidlines

1. Please fork this to your account.
2. Please never commit build and project dependencies files.
3. Please work on topic branch.
4. Please provide your commit in atomic manner. Each small changes should be commited separetely. 
5. Please provide meaningful name of commit.
6. Please use [this](https://udacity.github.io/git-styleguide/) convention of commiting.
7. Please put logic into separate module. Exapmle of module is in `add.js` file.
8. Please put endpoint definition into `index.js`.
