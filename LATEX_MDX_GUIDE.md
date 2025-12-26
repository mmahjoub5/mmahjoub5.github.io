# Using LaTeX Math in MDX Blog Posts

Your blog now supports LaTeX math rendering using KaTeX! Here's how to use it in your MDX files.

## Inline Math

For inline math expressions, use single dollar signs:

```markdown
The equation $E = mc^2$ shows the relationship between energy and mass.
```

Result: The equation $E = mc^2$ shows the relationship between energy and mass.

## Display Math (Block)

For display math (centered equations), use double dollar signs:

```markdown
$$
\frac{\partial L}{\partial W} = \frac{\partial L}{\partial Z} \cdot X^T
$$
```

Result:
$$
\frac{\partial L}{\partial W} = \frac{\partial L}{\partial Z} \cdot X^T
$$

## Common LaTeX Examples

### Matrices
```markdown
$$
W = \begin{bmatrix}
w_{11} & w_{12} \\
w_{21} & w_{22}
\end{bmatrix}
$$
```

### Summations
```markdown
$$
\sum_{i=1}^{n} x_i = x_1 + x_2 + \cdots + x_n
$$
```

### Integrals
```markdown
$$
\int_{a}^{b} f(x) \, dx
$$
```

### Greek Letters
```markdown
Common symbols: $\alpha$, $\beta$, $\gamma$, $\theta$, $\lambda$, $\mu$, $\sigma$
```

### Partial Derivatives
```markdown
$$
\frac{\partial L}{\partial \theta} = \sum_{i=1}^{n} \frac{\partial L}{\partial z_i} \cdot \frac{\partial z_i}{\partial \theta}
$$
```

### Chain Rule Example
```markdown
For backpropagation, the chain rule is:

$$
\frac{\partial L}{\partial W_{ij}} = \sum_{k} \frac{\partial L}{\partial Z_k} \cdot \frac{\partial Z_k}{\partial W_{ij}}
$$
```

### Matrix Operations
```markdown
Matrix multiplication gradient:

$$
\begin{align}
Z &= WX \\
\frac{\partial L}{\partial W} &= \frac{\partial L}{\partial Z} \cdot X^T \\
\frac{\partial L}{\partial X} &= W^T \cdot \frac{\partial L}{\partial Z}
\end{align}
$$
```

## Example Blog Post with Math

Here's an example of how to use math in your autograd blog post:

```mdx
export const metadata = {
  title: "Building a Minimal Tensor Autograd Engine in C++",
  description: "Reverse-mode autodiff with matrix operations",
};

# Building a Minimal Tensor Autograd Engine in C++

## Matrix Multiply Backpropagation

Given a forward pass:

$$
Z = WX
$$

where $W \in \mathbb{R}^{m \times n}$ and $X \in \mathbb{R}^{n \times p}$, 
the gradients are computed as:

$$
\frac{\partial L}{\partial W} = \frac{\partial L}{\partial Z} \cdot X^T
$$

$$
\frac{\partial L}{\partial X} = W^T \cdot \frac{\partial L}{\partial Z}
$$

This follows from the chain rule for matrix calculus.

## Gradient Checking

We verify gradients using finite differences:

$$
\frac{\partial L}{\partial w_{ij}} \approx \frac{L(w_{ij} + \epsilon) - L(w_{ij} - \epsilon)}{2\epsilon}
$$

where $\epsilon = 10^{-5}$ is typically used.
```

## Tips

1. **Escaping**: If you need to show actual dollar signs, escape them: `\$`
2. **Newlines**: LaTeX math doesn't like blank lines inside equations
3. **Alignment**: Use `\begin{align}...\end{align}` for multi-line aligned equations
4. **Spacing**: Use `\,` for small space, `\:` for medium, `\;` for large
5. **Testing**: Check the KaTeX documentation for supported functions: https://katex.org/docs/supported.html

## Not Supported

Some advanced LaTeX features aren't available in KaTeX:
- Custom LaTeX packages
- TikZ diagrams
- Some specialized symbols

For complex diagrams, consider creating images instead.
