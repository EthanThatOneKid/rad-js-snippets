const chainify = (...chain) => arg => chain.reduce((a, b) => b(a), arg);
