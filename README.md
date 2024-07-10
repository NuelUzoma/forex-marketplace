
---

# Forex Marketplace

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Monorepo Structure](#monorepo-structure)
- [Services](#services)
  - [User and Authentication Service](#user-and-authentication-service)
  - [Wallet Service](#wallet-service)
  - [Transaction and Order Service](#transaction-and-order-service)
  - [Integration/Rate Service](#integrationrate-service)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Services](#running-the-services)
  - [Generating Protobuf Files](#generating-protobuf-files)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Testing](#testing)

## Introduction

The Forex Marketplace is a monorepo-based microservices project that allows users to buy and sell foreign exchange (forex). It fetches real-time conversion rates from an external API and facilitates transactions via a secure and scalable platform.

## Features

- User registration and authentication
- Wallet management with credit/debit functionality
- Forex transaction and order management
- Real-time forex rates integration
- gRPC for internal communication between microservices
- REST API for user-facing endpoints

## Technology Stack

- **Backend Framework**: NestJS with TypeScript
- **Database**: PostgreSQL with TypeORM
- **Internal Communication**: gRPC
- **External API Integration**: ExchangeRate-API
- **Monorepo Management**: Nx
- **Protobuf Compiler**: grpc-tools and ts-proto

## Monorepo Structure

```
root/
├── apps/
│   ├── users/
│   ├── wallet/
│   ├── transactions/
│   ├── rates/
├── authentication/
├── libs/
├── protos/
│   ├── generated/
│   ├── user.proto
├── scripts/
│   ├── generate-proto.sh
├── servers/
├── node_modules/
├── nx.json
├── package.json
├── tsconfig.base.json
```

## Services

### User and Authentication Service

- **Responsibilities**: User registration, authentication, and profile management
- **Endpoints**:
  - `POST /users`
  - `GET /users`
  - `GET /users/:username`
  - `PUT /users/:userId/profile`
  - `POST /auth/login`
  - `GET /auth/user`

### Wallet Service

- **Responsibilities**: Managing user wallets, including checking balances and performing transactions
- **Endpoints**:
  - `POST /wallets`
  - `GET /wallets/`
  - `PUT /wallets/deposit/:walletId`

### Transaction and Order Service

- **Responsibilities**: Handling the creation and management of forex transactions and orders
- **Endpoints**:
  - `POST /transaction/buy`
  - `POST /transaction/sell`
  - `GET /transaction/history`

### Integration/Rate Service

- **Responsibilities**: Fetching current forex rates from ExchangeRate-API and providing them to other services via gRPC
- **Endpoints**:
  - `GRPC GetRate`

## Getting Started

### Prerequisites

- Nest.js
- PostgreSQL
- Nx CLI

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NuelUzoma/forex-marketplace.git
   cd forex-marketplace
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

### Running the Services

1. Start PostgreSQL and create the necessary databases.

2. Run the services:
   ```bash
   nx serve users
   nx serve wallet
   nx serve transactions
   nx serve rates
   ```

### Generating Protobuf Files

1. Run the script to generate protobuf files:
   ```bash
   sh scripts/generate-proto.sh
   ```

## Environment Variables

Define all necessary environment variables in the `.env` file. Example:

```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password
DB_DATABASE=your_db_name

# JWT
JWT_SECRET=your_jwt_secret

# Exchange Rate API
EXCHANGE_RATE_API_KEY=your_api_key
```

## API Documentation

API documentation is created using Swagger but incomplete at the moment.

## Testing

To run tests, use the following command:

```bash
nx test
```

---