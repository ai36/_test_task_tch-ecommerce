# _test_task_tch-ecommerce

#### Andrei Fedorov ([https://github.com/ai36](https://github.com/ai36))

## E-Commerce LP
[GitHub-repo link](https://github.com/ai36/_test_task_tch-ecommerce)\
[Demo link](https://test-task-tch-ecommerce.vercel.app/)

## Setup

### Installation

```sh
npm i
```

### Run in dev mode

```sh
npm run dev
```

### Run in production mode

```sh
npm run build && npm start
```

## Time

|Stage       |Time        |
|------------|------------|
 Init        | 0.5 h
 Header      | 0.3 h
 Hero        | 0.5 h
 CTAHelper   | 0.9 h
 CTAMain     | 2.5 h
 Adaptive    | 1 h
 README.md   | 0.5 h

## Lighthouse

![lighthouse.jpg](https://snipboard.io/k5w8mH.jpg)

## Trade-offs / Decisions

1. After reviewing the mockup, I decided to abandon the use of CSS variables for sizes—there were too many different values, and reusing sizes wouldn't be beneficial. I only used CSS variables for color.
2. Due to the composite image in the CTA block, I had to strictly fix the sizes and offsets. There's probably a better solution, but finding one would have taken too much time.
3. I hope I understood the assignment correctly—only part of the mockup needed to be implemented.
