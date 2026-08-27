# NFT Marketplace

Адаптивная вёрстка NFT-маркетплейса по макету из Figma (Anima).  
Мультистраничный React-проект с тёмной темой, CSS Modules и деплоем на GitHub Pages.

**Демо:** [grootoss.github.io/nft-marketplace](https://grootoss.github.io/nft-marketplace)

---

## Страницы

<table>
  <thead>
    <tr>
      <th>Маршрут</th>
      <th>Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td nowrap><code>/</code></td>
      <td>Главная: промо, тренды, креаторы, категории, NFT, аукцион, подписка</td>
    </tr>
    <tr>
      <td nowrap><code>/marketplace</code></td>
      <td>Каталог NFT: поиск, табы NFTs / Collections, сетка карточек</td>
    </tr>
    <tr>
      <td nowrap><code>/rankings</code></td>
      <td>Рейтинг креаторов: Today / This Week / This Month / All Time</td>
    </tr>
    <tr>
      <td nowrap><code>/wallet</code></td>
      <td>Подключение кошелька</td>
    </tr>
    <tr>
      <td nowrap><code>/signup</code></td>
      <td>Регистрация аккаунта</td>
    </tr>
    <tr>
      <td nowrap><code>/nft</code></td>
      <td>Страница NFT: описание, ставка, таймер, похожие работы</td>
    </tr>
    <tr>
      <td nowrap><code>/artist/:id</code></td>
      <td>Профиль артиста: статистика, табы Created / Owned / Collection</td>
    </tr>
  </tbody>
</table>

Все экраны сверстаны под **mobile → tablet → desktop** (брейкпоинты `375px`, `834px`, `1280px`).

---

## Стек

- **React 19** + **TypeScript**
- **Vite**
- **React Router**
- **CSS Modules**
- ESLint, Stylelint, Prettier
- **gh-pages** для деплоя

---

## Запуск локально

```bash
npm install
npm run dev
```
