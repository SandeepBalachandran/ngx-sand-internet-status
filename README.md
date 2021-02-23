<!-- ![](./images/preview.png) -->
<h1 align='center'>ngx-sand-internet-status</h1>

<h3 align="center"> An angular internet status checker</h3>
<br>
<p align="center"> 
  <a href="https://github.com/SandeepBalachandran/ngx-sand-internet-status/releases/" target="_blank">
    <img alt="GitHub release" src="https://img.shields.io/github/v/release/SandeepBalachandran/ngx-sand-internet-status?include_prereleases&style=flat-square">
  </a> 

  <a href="https://github.com/SandeepBalachandran/ngx-sand-internet-status/commits/main" target="_blank">
    <img src="https://img.shields.io/github/last-commit/SandeepBalachandran/ngx-sand-internet-status?style=flat-square" alt="GitHub last commit">
  </a>

  <a href="https://github.com/SandeepBalachandran/ngx-sand-internet-status/issues" target="_blank">
    <img src="https://img.shields.io/github/issues/SandeepBalachandran/ngx-sand-internet-status?style=flat-square&color=red" alt="GitHub issues">
  </a>

  <a href="https://github.com/SandeepBalachandran/ngx-sand-internet-status/pulls" target="_blank">
    <img src="https://img.shields.io/github/issues-pr/SandeepBalachandran/ngx-sand-internet-status?style=flat-square&color=blue" alt="GitHub pull requests">
  </a>

  </br>

  <a href="https://standardjs.com" target="_blank">
    <img alt="ESLint" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square">
  </a>
  
  <a href="" target="_blank">
    <img alt="ESLint" src="https://img.shields.io/github/stars/SandeepBalachandran/ngx-sand-internet-status">
  </a>
  
  <a href="" target="_blank">
    <img alt="ESLint" src="https://img.shields.io/github/forks/SandeepBalachandran/ngx-sand-internet-status">
  </a>
   <a href="" target="_blank">
    <img alt="Codesize" src="https://img.shields.io/github/languages/code-size/SandeepBalachandran/ngx-sand-internet-status.svg">
  </a>
  <a href="" target="_blank">
    <img alt="Top Language" src="https://img.shields.io/github/languages/top/SandeepBalachandran/ngx-sand-internet-status.svg">
  </a>
  
</p>
<hr>

## Demo 
![](https://github.com/SandeepBalachandran/ngx-sand-internet-status/raw/main/assets/demo.gif) 

* [Live Demo](https://sandeepbalachandran.github.io/ngx-sand-internet-status/)
* [Playground](https://stackblitz.com/edit/sand-internet-status)
* [NPM package](https://www.npmjs.com/package/ngx-sand-internet-status)

## Table of contents
* [Features](#features)
* [Installation](#getting-started)
* [API](#api)
* [Usage](#usage)

## Features


[Goto Top](#table-of-contents)

## Getting Started
### Step 1 : Install the package 
#### NPM
```cmd
npm install ngx-sand-internet-status
```
### Step 2 : After installation import  into your root or feature module

```cmd
import { NgxInternetStatusModule } from 'ngx-internet-status'
```
### Step 3 : Add ``` NgxInternetStatusModule ``` to the imports of your NgModule

```cmd
@NgModule({
  imports: [
    ...,
    NgxInternetStatusModule
    
  ],
  ...
})
class YourModule { ... }
```

### Step 4: After installation import  service into your  module

```cmd
import { NgxInternetStatusService } from "ngx-sand-internet-status";
```
### Step 5 : Add ``` NgxInternetStatusService ``` to the providers of your NgModule

```cmd
@NgModule({
  providers: [
    ...,
    NgxInternetStatusService
  ],
  ...
})
class YourModule { ... }
```

### Usage  
* Use ``` ``` in your templates to add the default dropdown in your view like below

 
 [Goto Top](#table-of-contents)
## API

#### Input


* ```settings:Object``` - Settings object to change the default configurations.

 ```ts
  settings = {
    type :'banner',
    onlineTitle:'Seems good',
    offlineTitle:'Connection error',
    onlineText:'Hurray! You are back online',
    offlineText:'Oops! Looks like you are offline',
  }
 ```

#### Output


  
  [Goto Top](#table-of-contents)

## Help Improve

Found a bug or an issue with this? [Open a new issue](https://github.com/SandeepBalachandran/ngx-sand-internet-status/issues) here on GitHub.


## Contribute
Please check the [**Contributing Guidelines**](https://github.com/SandeepBalachandran/ngx-sand-internet-status/blob/main/CONTRIBUTING.md) before contributing.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5. 
