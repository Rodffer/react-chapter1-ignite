import React from 'react'

const repositoryName = 'unform';

export default function RepositoryList() {
  return (
    <section className='repository-list'>
      <h1>Repositórios</h1>
      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>
          <a href="">Acessar repositório</a>
        </li>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>
          <a href="">Acessar repositório</a>
        </li>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>
          <a href="">Acessar repositório</a>
        </li>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>
          <a href="">Acessar repositório</a>
        </li>
      </ul>
    </section>
  )
}
