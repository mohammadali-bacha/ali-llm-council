FROM python:3.12-slim

# Install uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv

WORKDIR /app

# Copy project files
COPY pyproject.toml uv.lock ./
COPY backend ./backend
COPY README.md ./

# Install dependencies
RUN uv sync --frozen

# Create data directory
RUN mkdir -p data/conversations

# Expose port
EXPOSE 8001

# Run the application
CMD ["uv", "run", "python", "-m", "backend.main"]
