def battery_bars(percent):
    if (percent < 20): return "[.....]"
    elif (percent >= 20 and percent < 40): return "[#....]"
    elif (percent >= 40 and percent < 60): return "[##...]"
    elif (percent >= 60 and percent < 80): return "[###..]"
    elif (percent >= 80 and percent < 100): return "[####.]"
    return "[#####]"
print(battery_bars(25))