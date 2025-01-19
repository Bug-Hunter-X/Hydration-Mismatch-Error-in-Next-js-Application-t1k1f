```javascript
//pages/index.js
import { useLayoutEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent rendering until mounted
  }

  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
    </div>
  );
}
```