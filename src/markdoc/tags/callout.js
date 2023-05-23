import * as React from 'react'

export default function Callout({ title, children }) {
  return (
    <span className="callout">
      <strong>{title}</strong>
      <span>{children}</span>
      <style>
        {`
          .callout {
            display: flex;
            flex-direction: column;
            padding: 12px 16px;
            background: #f6f9fc;
            border: 1px solid #dce6e9;
            border-radius: 4px;
          }
          .callout :global(p) {
            margin: 0;
          }
        `}
      </style>
    </span>
  )
}
