import react from './react.png';
import webpack from './webpack.png';
import jenkins from './jenkins-headshot.png';
import redux from './redux.png';
import bootstrap from './bootstrap.png';
import sass from './sass-seal.png';
import vue from './vue.png';
import docker from './docker.png';
import zend from './zend.png';
import slim from './slim.png';
import npm from './npm.png';
import jest from './jest.svg';
import phpunit from './phpunit.png';
import compose from './dockercompose.png';
import node from './node.svg'

const config =[
  {
    label: 'react',
    path: react,
    tags: ['front-end', 'javascript']
  },
  {
    label: 'redux',
    path: redux,
    tags: ['front-end', 'javascript']
  },
  {
    label: 'webpack',
    path: webpack,
    tags: ['tools', 'javascript']
  },
  {
    label: 'jenkins',
    path: jenkins,
    tags: ['tools']
  },
  {
    label: 'bootstrap',
    path: bootstrap,
    tags: ['front-end', 'css']
  },
  {
    label: 'zend',
    path: zend,
    tags: ['back-end', 'php']
  },
  {
    label: 'vue',
    path: vue,
    tags: ['front-end', 'javascript']
  },
  {
    label: 'sass',
    path: sass,
    tags: ['front-end', 'css']
  },
  {
    label: 'docker',
    path: docker,
    tags: ['tools']
  },
  {
    label: 'slim',
    path: slim,
    tags: ['php', 'back-end']
  },
  {
    label: 'npm',
    path: npm,
    tags: ['tools', 'back-end', 'javascript']
  },
  {
    label: 'jest',
    path: jest,
    tags: ['tools', 'testing', 'javascript']
  },
  {
    label: 'phpunit',
    path: phpunit,
    tags: ['tools', 'testing', 'php']
  },
  {
    label: 'compose',
    path: compose,
    tags: ['tools']
  },
  {
    label: 'node',
    path: node,
    tags: ['javascript', 'back-end']
  }
];

export default config;