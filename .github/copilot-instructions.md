# Copilot Instructions for Jamtown (LetterJam Game Tracker)

## Project Overview

This is a React/TypeScript web app for tracking game state during LetterJam gameplay. It's a single-page application built with Create React App that persists game data to browser localStorage.

## Architecture

### State Management Pattern

- **Single source of truth**: `GameSheetV1` type in [GameSheet.ts](../src/GameSheet.ts) defines the entire game state
- **Persistence layer**: [Persistance.ts](../src/Persistance.ts) wraps localStorage with type-safe methods
- **Top-level state**: [App.tsx](../src/App.tsx) holds state and passes down callbacks for updates
- State updates follow immutable patterns: spread existing state, update fields, then call `setSheet()` and `saveState()`

### Component Hierarchy

```
App (main state holder)
├── CharacterList (static alphabet display)
├── WordSection (manages 10 round lines)
│   └── WordLine × 10 (individual round input)
└── LetterSection × 2 (derived letters & guesses)
```

### Data Flow

1. User input triggers component callback (e.g., `letterChanged()`)
2. Component updates local state and calls parent callback
3. Parent reconstructs full `GameSheetV1` object with spread operator
4. Parent calls `setSheet()` and `saveState()` in sequence
5. Persistance layer writes JSON to localStorage key `'gameV1'`

## Key Conventions

### Type Definitions

- All game state types live in [GameSheet.ts](../src/GameSheet.ts)
- `RoundLine` = letters array + guess string
- Fixed-size arrays: 10 round lines, 7-letter words, max 9 letters per line

### Component Props Pattern

Components use explicit type definitions:

```typescript
type ComponentProps = {
  data: DataType;
  onUpdated: (newData: DataType) => void;
};
```

### State Update Antipattern

`newGame()` has a known issue: calls `window.location.reload()` because `setSheet()` doesn't trigger re-render. This needs investigation (see TODO in [App.tsx](../src/App.tsx#L27)).

### Input Handling

- All text inputs use controlled component pattern
- `onChange` updates local state immediately
- Callbacks propagate changes up the tree
- Input classNames include position info (e.g., `'line1'`, `'line2'`)

## Development Workflow

**Start dev server**: `npm start` (opens http://localhost:3000)
**Run tests**: `npm test` (interactive watch mode)
**Build for production**: `npm build` (outputs to `build/`)

## Critical Files

- [App.tsx](../src/App.tsx) - Main application logic and state orchestration
- [GameSheet.ts](../src/GameSheet.ts) - Type definitions and blank state factory
- [Persistance.ts](../src/Persistance.ts) - localStorage wrapper
- [WordSection.tsx](../src/components/WordSection.tsx) - Maps over round lines and aggregates updates

## Testing & Debugging

- Standard Create React App test setup with Jest and React Testing Library
- Console logging present in callbacks for debugging state updates (see [App.tsx](../src/App.tsx#L43), [WordSection.tsx](../src/components/WordSection.tsx#L15))
- Use React DevTools to inspect component state hierarchy

## Building

- Use Yarn for scripts in this project. DO NOT use npm.
- To start the development server, run `yarn start`.
