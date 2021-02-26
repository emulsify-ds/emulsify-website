import React from 'react'
import { Link } from 'gatsby'

import styles from './article.module.css'



export default ({ article, wrapperTag }) => {
  const Wrapper = `${wrapperTag ? wrapperTag : 'div'}`;

  return (
    <Wrapper className={styles.preview}>
      <div className={styles.content}>
        <h3 className={styles.previewTitle}>
          <Link to={`/case-studies/${article.slug}`}>{article.title}</Link>
        </h3>
        <h4 className={styles.author}>
          {/* <span>by: </span><Link to={`/${article.author.slug}`}>{article.author.name}</Link> */}
          <small>{article.publishDate}</small>
        </h4>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: article.description.childMarkdownRemark.html,
          }}
        />
        <div className={styles.tags}>
          {article.tags &&
            article.tags.map(tag => (
              <span className={styles.tag} key={tag}>
                {tag}
              </span>
            ))}
        </div>
      </div>
    </Wrapper>
  )
}
