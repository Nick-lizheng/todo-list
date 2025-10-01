using Server.Models;

namespace Server.Services;

public interface ITodoService
{
    IEnumerable<TodoItem> List();
    TodoItem Create(string title);
    bool Remove(Guid id);
}
