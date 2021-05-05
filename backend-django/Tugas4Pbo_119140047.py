import random
import time
import asyncio


class Tim:
    def __init__(self, nama):
        self.nama = nama
        self.win = 0
        self.lose = 0
        self.draw = 0
        self.pts = 0

    def menang(self):
        self.win = self.win + 1
        self.pts = self.pts + 2

    def kalah(self):
        self.lose = self.lose +1
        self.pts = self.pts - 1
    def seri(self):
        self.draw = self.draw + 1
        self.pts = self.pts +1

    def __eq__(self, string):
        return self.nama == string


class LeaderBoard:
    def __init__(self, *teams):
        self.teams = []
        for team in teams:
            self.teams.append(Tim(team))

    def tampil(self):
        print('No\tnama\t\tW\tL\tD\tpts')
        for i, team in zip(range(1, len(self.teams) + 1), self.teams):
            print(
                '{}. {}\t\t {}\t{}\t{}\t{}'.format(
                    i,
                    team.nama,
                    team.win,
                    team.lose,
                    team.draw,
                    team.pts
                )
            )


class Group(LeaderBoard):
    def __init__(self, nama, *args):
        self.nama = nama
        super().__init__(*args)

    def tampil(self):
        print(f'########################## {self.nama.upper()} ##########################')
        super().tampil()

    async def match(self, tim1, tim2, team_1_win=None):
        await asyncio.sleep(5)
        gacha = random.randint(1, 3)  # pemenang ditentukan dengan random
        print(f'pertandingan {tim1} vs {tim2} telah selesai d')
        if gacha == 1:
            team_1_win = True
        elif gacha == 2:
            team_1_win = False
        if (team_1_win is None):
            for tim in self.teams:
                if tim == tim1 or tim == tim2:
                    tim.seri()
        else:
            if team_1_win:
                for tim in self.teams:
                    if tim == tim1:
                        tim.menang()
                    if tim == tim2:
                        tim.kalah()
            if not team_1_win:
                for tim in self.teams:
                    if tim.nama == tim2:
                        tim.menang()
                    if tim.nama == tim1:
                        tim.kalah()
        self.teams.sort(key=lambda tim: tim.pts, reverse=True)


master = Group('Liga_Indonesia', 'Anarki', 'Tiseris', 'oraora', 'ukeehh', 'kitela', 'sughoi', 'super mild', 'viavo',
               'aremaa')


# pool untuk menghimpun pertandingan
async def tanding():
    t1 = asyncio.create_task(
        master.match('Anarki', 'Tiseris'))
    t2 = asyncio.create_task(
        master.match('Anarki', 'oraora'))
    t3 = asyncio.create_task(
        master.match('Anarki', 'ukeehh'))
    t4 = asyncio.create_task(
        master.match('Anarki', 'kitela'))
    t5 = asyncio.create_task(
        master.match('Anarki', 'sughoi'))
    t6 = asyncio.create_task(
        master.match('Anarki', 'super mild'))
    t7 = asyncio.create_task(
        master.match('Anarki', 'viavo'))
    t8 = asyncio.create_task(
        master.match('Anarki', 'aremaa'))
    await t1
    await t2
    await t3
    await t4
    await t5
    await t5
    await t6
    await t7


s = time.perf_counter()

asyncio.run(tanding())

f = time.perf_counter()
print(f'selesai dalam {f - s} detik')
print()
master.tampil()