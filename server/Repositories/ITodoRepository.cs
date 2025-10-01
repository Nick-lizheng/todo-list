using Server.Models;

namespace Server.Repositories;

public interface ITodoRepository
{
    IEnumerable<TodoItem> GetAll();
    TodoItem Add(string title);
    bool Delete(Guid id);
}
