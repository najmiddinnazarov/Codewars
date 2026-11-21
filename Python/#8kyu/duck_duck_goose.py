def duck_duck_goose(players, goose):
    if (len(players) == 0): return None
    idx = (goose - 1) % len(players)
    return players[idx].name
print(duck_duck_goose(['a', 'b', 'c', 'd'], 1))