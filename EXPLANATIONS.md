# Main

15211

## Sources

* [Youtube](https://www.youtube.com/watch?v=GUwizGbY4cc)
* [Shadcn + Next](https://ui.shadcn.com/docs/installation/next)
* [Next.js](https://nextjs.org/docs/app/getting-started/installation)

## CMD

* Create `/Users/aliv/Documents/0_Docs/0_Job/Coding/1_Archakov06_2024-1012/next-pizza-5-react-18` folder
* Go to new folder:

```text
aliv@Aleksandrs-MacBook-Air ~ % cd /Users/aliv/Documents/0_Docs/0_Job/Coding/1_Archakov06_2024-1012/next-pizza-5-react-18
```

* Create NextJS App:

```text

aliv@Aleksandrs-MacBook-Air next-pizza-5-react-18 % npx create-next-app@latest
✔ What is your project named? … next-pizza
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like your code inside a `src/` directory? … No
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to use Turbopack for `next dev`? … No
✔ Would you like to customize the import alias (`@/*` by default)? … No
...
Installing dependencies:
...
Installing devDependencies:
...
0 vulnerabilities
...
```

* open `next-pizza` in VS Code

## React 18

* React 19 is stable version from 2024.12. I use -v19. 
* But `Youtube` source and `Shadcn` use React 18.
* [Install React 18](https://ui.shadcn.com/docs/react-19):

```terminal
npm i react@18 react-dom@18
```

## Library Shadcn

* [shadcn](https://ui.shadcn.com/docs/installation/next)

```terminal
npx shadcn@latest init

✔ Preflight checks.
✔ Verifying framework. Found Next.js.
✔ Validating Tailwind CSS.
✔ Validating import alias.
✔ Which style would you like to use? › New York
✔ Which color would you like to use as the base color? › Zinc
✔ Would you like to use CSS variables for theming? … yes
✔ Writing components.json.
✔ Checking registry.
✔ Updating tailwind.config.ts
✔ Updating app/globals.css
✔ Installing dependencies.
✔ Created 1 file:
  - lib/utils.ts
...
```

* add, for example, button and checkbox components (together):

```terminal
npx shadcn@latest add checkbox button

✔ Checking registry.
✔ Installing dependencies.
✔ Created 1 file:
  - components/ui/button.tsx
```

## LUCIDE svg Icons Library

### Install Lib

* lucide (franc) - [люсид] ясный
* [lucide.dev](https://lucide.dev/guide/installation) install for React Application:

```terminal
npm install lucide-react
```

### Install User Icon

* <https://lucide.dev/icons/user>
  * Press `Copy JSX` button
  * Insert in `components/shared/header.tsx`

## | - pipe

```html
<span className='h-full w-[1px] bg-white mx-3' />
```

## Icons: ShoppingCart or Arrow

* ShoppingCart or Arrow (when pressed)

```html
<ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
...
<ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
```

## Storybook.js.org

* This is a great Castom Hooks Lib
* [Storybook](https://storybook.js.org)
  * React-use Sensor
    * `npm i react-use`
* do not work, uninstaall: 
  * delete from `package.json`
  * `npm i` in terminal

## Prisma Lib and Prisma/client Lib

* (docs/getting-started)[https://www.prisma.io/docs/getting-started]
* `Prisma` in `PostgreSQL` is like `Monguse` for `mongoDB`
* 02:32:50 install prisma:
  * `npm i prisma @prisma/client`
  * `prisma` folder
    * `prisma-client` file:
      * (best practices)[ttps://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices] was not be find
      * (prisma/client docs)[https://www.prisma.io/docs/orm/prisma-client]

## Zustand 

* (zustand-vs-redux)[https://www.wisp.blog/blog/zustand-vs-redux-making-sense-of-react-state-management]
  * Note: 
  Выбор между `Zustand` и `Redux` заключается не в том, что «лучше», 
  а в том, что лучше соответствует вашим конкретным потребностям. 
  `Zustand` превосходит простоту и быструю реализацию, 
  в то время как `Redux Toolkit` обеспечивает надежную структуру для сложных приложений. 
  Помните, что вам не всегда нужна библиотека управления государством.```
* (`zustand-demo`)[https://zustand-demo.pmnd.rs]
* `npm i zustand`
* `store` fold

## Vercel.com

* (vercel)[https://vercel.com]
* 