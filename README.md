# nimbus-icons
Nimbus-icons is an Open Source icon system built by Nuvemshop / Tiendanube. It’s an Open Source icon set. 

## How to use
You can download the whole set of icons or just the icons that you need from the nimbus-icons.dev site.

You can also use them for react development, using `yarn` to install.

| Property      | Type          |            |
| ------------- | ------------- | ---------- |
| aria-label | string | (optional) |
| size | number<br/>'small' = 16px (default)<br/>'medium' = 24px<br/>'large' = 32px<br/>'fixed'| (optional) |

### Example
```javascript
import { CloudIcon, AlertIcon, StoreIcon } from "@tiendanube/icons";

<CloudIcon />
<AlertIcon size="large" />
<StoreIcon size="medium" aria-label="Store" />
```

## Contributing
Do you want to contribute? **Excellent!** You have two ways to do it. 
1. You can request a new icon through an [icon request](issues/new?assignees=&labels=&template=icon-request.md&title=%5BIcon+request%5D "Nimbus Icons - Icon request") or 
2. Create and upload an icon following the instructions in our [contribution guide](.github/CONTRIBUTING.md "Nimbus Icons - Contributing").

**Thanks for contributing! :heart:**

## License

Copyright 2020 Linkedstore S.A.

Code License: [MIT](LICENSE) Applies to all other files
