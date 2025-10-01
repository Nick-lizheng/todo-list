using System.Collections.Concurrent;
using Server.Models;

namespace Server.Repositories;

public class InMemoryTodoRepository : ITodoRepository
{
    private readonly ConcurrentDictionary<Guid, TodoItem> _store = new();

    public IEnumerable<TodoItem> GetAll() => _store.Values.OrderBy(t => t.Title);

    public TodoItem Add(string title)
    {
        var item = new TodoItem { Title = title };
        _store[item.Id] = item;
        return item;
    }

    public bool Delete(Guid id) => _store.TryRemove(id, out _);
}
