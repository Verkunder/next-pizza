## Next Js

#### Для чего нужен SSR? 
>Это технология, которая позволяет, с помощью Node.js, запускать JavaScript код на сервере (а не в браузере как обычно) и готовый результат отправлять пользователю, избегая лишней нагрузки на его браузер и компьютер.

#### Является ли nextjs приложения SPA? Почему?

>Да

#### С помощью какой команды поднимаются шаблоны nextjs проектов?

>- ```dev``` - Запускается ```next dev``` для запуска Next.js в режиме разработки.
>- ```build``` - Запускает ```next build``` сборку приложения.
>- ```start``` - Запускает ```next start``` сервер.
>- ```lint``` - Запускает ```next lint``` линтер.

#### Какие режимы работы страниц есть в nextjs?

1. Статическая генерация (на клиенте)
> Если на странице используется статическая генерация , HTML-код страницы генерируется во время построения . Это означает, что в рабочей среде HTML-код страницы генерируется при запуске ```next build```. Затем этот HTML будет повторно использоваться при каждом запросе. Он может кэшироваться CDN.
>
> В Next.js вы можете статически генерировать страницы с данными или без них .
>
> Контент зависит от внешних данных ```getStaticProps```, пути зависят от внешних данных ```getStaticPaths```
>
> Следует использовать статическую генерацию для страниц типа:
>
>-  Маркетинговые страницы
>- Посты в блогах и портфолио
>- Списки продуктов электронной коммерции
>- Справка и документация

```
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://.../posts/${params.id}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}

```

2. Рендеринг на стороне сервера

> Если страница использует рендеринг на стороне сервера , HTML-код страницы генерируется при каждом запросе.
>
> Юзай  ```getServerSideProps```
>
```
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
```

#### Какие способы получения данных для страниц существуют? Что такое инкрементальная статическая регенерация и в каких случаях она может быть нужна?

> 1. getServerSideProps - получение данных если рендер на сервере
> 2. getStaticProps -  получение данных если рендер на клиенте
>
> Инкрементная статическая регенерация (ISR) позволяет использовать статическую генерацию для каждой страницы без необходимости перестраивать весь сайт . С ISR вы можете сохранить преимущества статики при масштабировании до миллионов страниц. 
> 
> Чтобы использовать ISR, добавьте ```revalidate``` свойство ```getStaticProps```:

```
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' }
}

export default Blog
``` 

> Когда делается запрос к странице, которая была предварительно визуализирована во время сборки, сначала будет отображаться кэшированная страница.
> 
> - Любые запросы к странице после первоначального запроса и до 10 секунд также кэшируются и выполняются мгновенно.
> - После 10-секундного окна следующий запрос по-прежнему будет показывать кешированную (устаревшую) страницу.
> - Next.js запускает регенерацию страницы в фоновом режиме.
> -После успешного создания страницы Next.js аннулирует кеш и покажет обновленную страницу. Если фоновая регенерация не удалась, старая страница останется неизменной.

#### Может ли nextjs работать без установки nodejs на production сервере (отдаваться с помощью обычного веб сервера вроде nginx)? Что для этого нужно? 

>  [Экспортнуть как статический HTML](https://nextjs.org/docs/advanced-features/static-html-export)

#### Как продебажить приложение (конкретный компонент, функцию) в режиме SSR?

> Консоль лог брат твой, либо иди через дебагер
> 
> Для тестирования в тузле хрома добавить ```"dev": "NODE_OPTIONS='--inspect' next dev"```
> 
> [Если все пошло не по плану и Антон завалил](https://nextjs.org/docs/advanced-features/debugging)

#### Как реализовать адаптивные картинки в nextjs?

> Использовать компоненте Image ```import Image from 'next/image'```
> 
```
import Image from 'next/image'
import profilePic from '../public/me.png'

function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src={profilePic}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <p>Welcome to my homepage!</p>
    </>
  )
}
```

#### Какие режимы есть для подгрузки Third Party scripts?

> - beforeInteractive: загружать скрипт перед любым кодом Next.js и до того, как произойдет гидратация страницы.
> - afterInteractive: ( по умолчанию ) Загрузите скрипт раньше, но после того, как на странице произойдет некоторое увлажнение.
> - lazyOnload: загружать сценарий позже во время простоя браузера.
> - worker: (экспериментальный) Загрузите скрипт в веб-воркере.
> 
> [Если что-то опять пошло не по плану](https://nextjs.org/docs/basic-features/script)

```
<Script
  id="show-banner"
  dangerouslySetInnerHTML={{
    __html: `document.getElementById('banner').classList.remove('hidden')`,
  }}
/>
```

#### Где хранить статические файлы?

> Public