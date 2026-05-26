# Use lightweight Node base
FROM node:22-bookworm-slim

# Install Playwright runtime dependencies only
RUN apt-get update && apt-get install -y \
    libnss3 libnspr4 libdbus-1-3 libatk1.0-0 libatk-bridge2.0-0 \
    libcups2 libdrm2 libxkbcommon0 libxdamage1 libxfixes3 libxrandr2 \
    libgbm1 libpango-1.0-0 libxcursor1 libxi6 libxinerama1 libxext6 \
    libxrender1 libxtst6 libasound2 ca-certificates && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install npm dependencies
RUN npm install --legacy-peer-deps --no-audit

# Copy source
COPY . .

# Install Playwright browsers during build
RUN npx playwright install --with-deps

# Default: run tests
CMD ["npx", "playwright", "test"]
