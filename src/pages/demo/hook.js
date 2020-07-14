import React, { useState, useEffect } from 'react'

export default function Example() {
  const [count, setCount] = useState(0)
  // count = 0, setCount 方法修改count
  
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}