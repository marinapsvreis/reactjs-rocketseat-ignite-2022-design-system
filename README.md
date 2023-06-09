## ℹ️ About

- This project is a monorepo with tokens and components for a Design System that we will use in the next project, the Ignite Call.
- In this project, I had the opportunity to learn how to create a Design System with Storybook using React, Stitches, and Radix.
- I learned how to use GitHub Actions to create CI/CD and improve build performance with Vercel cache and npm cache.
- I also learned how to publish npm packages.

Here is the list of components created in classes:

- [X] Text
- [X] Heading
- [X] Box
- [X] Button
- [X] TextInput
- [X] TextArea
- [X] Checkbox
- [X] Avatar
- [X] Multistep

In the challenge, I need to create two more components:

- [X] Tooltip
- [X] Toast

Whenever I add a new component or token to the Design System, I need to run these commands in the main folder:

```npm run changeset```
```npm run version-packages```

And when I push my changes to the repository, the release is automatically triggered.

To run the project, you can use the following commands:

```npm i```
```npm run build```
```npm run dev```

Note: Run npm i in the docs folder as well.


## ⚙️ Technologies
- React.js
- Storybook
- Typescript
- Stitches (CSS-in-JS)
- Radix UI (Unstyled, accessible components for building)
- Phosphor React (Icons)


## 🖥 Project Images

![preview](./IgniteDesignSystem.gif)