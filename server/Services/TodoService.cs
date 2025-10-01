using Server.Models;
using Server.Repositories;

namespace Server.Services;

public class TodoService : ITodoService
{
    private readonly ITodoRepository _repo;

    public TodoService(ITodoRepository repo) => _repo = repo;

    public IEnumerable<TodoItem> List() => _repo.GetAll();

    public TodoItem Create(string title)
    {
        if (string.IsNullOrWhiteSpace(title))
            throw new ArgumentException("Title is required.");
        return _repo.Add(title.Trim());
    }

    public bool Remove(Guid id) => _repo.Delete(id);
}
