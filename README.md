# geonet-s3-volcano-demo

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]
[![SvelteKit][kit.svelte.dev]][svelte-url]

## Installation

1. Create new Svelte project

    ```bash
    npm init @svelte-add/kit@latest svelte -- --demos false --with typescript+eslint+prettier+playwright
    ```

2. Change directory

    ```bash
    cd svelte/
    ```

3. Install dependencies

    ```bash
    npm install
    ```

## Developing

1. Run development server

    ```bash
    npm run dev
    ```

2. Install static adapter

    ```bash
    npm install @sveltejs/adapter-static --save-dev
    ```

## Building

1. Generate site content from AWS S3 bucket

    ```bash
    .devcontainer/scripts/createPageContent.sh
    ```

2. Create production version

    ```bash
    npm run build
    ```

3. Preview production build

    ```bash
    npm run preview
    ```

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/jajera/geonet-s3-volcano-demo.svg?style=for-the-badge
[contributors-url]: https://github.com/jajera/geonet-s3-volcano-demo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jajera/geonet-s3-volcano-demo.svg?style=for-the-badge
[forks-url]: https://github.com/jajera/geonet-s3-volcano-demo/network/members
[stars-shield]: https://img.shields.io/github/stars/jajera/geonet-s3-volcano-demo.svg?style=for-the-badge
[stars-url]: https://github.com/jajera/geonet-s3-volcano-demo/stargazers
[issues-shield]: https://img.shields.io/github/issues/jajera/geonet-s3-volcano-demo.svg?style=for-the-badge
[issues-url]: https://github.com/jajera/geonet-s3-volcano-demo/issues
[license-shield]: https://img.shields.io/github/license/jajera/geonet-s3-volcano-demo.svg?style=for-the-badge
[license-url]: https://github.com/jajera/geonet-s3-volcano-demo/blob/master/LICENSE.txt
[kit.svelte.dev]: https://img.shields.io/badge/SvelteKit-C7C7C7?style=for-the-badge&logo=svelte&logoColor=FF470C
[svelte-url]: https://kit.svelte.dev
