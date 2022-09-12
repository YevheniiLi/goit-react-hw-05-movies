export const Movies = () => {
  return (
      <form>
          <button type="submit">
              Search
          </button>

          <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search films"
          />
      </form>
  )
}