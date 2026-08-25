# NFT Marketplace

Адаптивная вёрстка NFT-маркетплейса по макету из Figma (Anima).  
Мультистраничный React-проект с тёмной темой, CSS Modules и деплоем на GitHub Pages.

**Демо:** [grootoss.github.io/nft-marketplace](https://grootoss.github.io/nft-marketplace)

---

## Страницы

| Маршрут        | Описание                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------- |
| `/`            | Главная: промо, тренды, топ-креаторы, категории, NFT, аукцион, «как это работает», подписка |
| `/marketplace` | Каталог NFT с поиском, табами NFTs / Collections и сеткой карточек                          |
| `/rankings`    | Топ-креаторы с периодами Today / This Week / This Month / All Time                          |
| `/wallet`      | Подключение кошелька                                                                        |
| `/signup`      | Регистрация аккаунта                                                                        |

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
